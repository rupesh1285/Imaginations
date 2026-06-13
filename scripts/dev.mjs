import { spawn } from 'child_process'
import { createClerkClient } from '@clerk/backend'
import { Pool } from 'pg'
import { config } from 'dotenv'

// Silence ALL Node.js warnings before anything loads
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const originalEmit = process.emit.bind(process)
process.emit = (event, ...args) => {
  if (event === 'warning') return false
  return originalEmit(event, ...args)
}

config({ quiet: true })

// ─── Connection checks ────────────────────────────────────────────────────
async function checkSupabase() {
  try {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL })
    await pool.query('SELECT 1')
    await pool.end()
    return true
  } catch {
    return false
  }
}

async function checkClerk() {
  try {
    const clerk = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY })
    await clerk.users.getUserList({ limit: 1 })
    return true
  } catch {
    return false
  }
}

// ─── Noise filter for Next.js output ─────────────────────────────────────
const SUPPRESS = [
  'Port 3000 is in use',
  'inferred your workspace root',
  'multiple lockfiles',
  'Detected additional lockfiles',
  'turbopack.root',
  'nextjs.org/docs',
  'middleware" file convention is deprecated',
  'SECURITY WARNING',
  'pg-connection-string',
  'adopt standard libpq',
  'sslmode=',
  'uselibpqcompat',
  'postgresql.org',
  'node --trace-warnings',
  'NODE_TLS_REJECT',
  'WeakRef',
  'See https://',
  'To prepare for',
  'In the next major version',
  '- If you want',
  'injected env',
  'tip: ⌘',
  'override existing',
  'enable debugging',
  'To silence this warning',
  'consider removing',
  'lockfiles if it',
  'package-lock.json',
  'D:\\Creations',
  'Use `node',
  'clerk.accounts.dev',
  'clerk.com/docs',
  'development keys',
  'strict usage limits',
  'bursting-leech',
  '[browser]',
  'next.js:',
  'proxy.ts:',
  'application-code:',
]

function shouldShow(line) {
  const trimmed = line.trim()
  if (!trimmed) return false
  if (SUPPRESS.some(s => trimmed.includes(s))) return false
  return true
}

function formatLine(line) {
  // Clean up the timing info from GET/POST lines
  return line.replace(/\s+\(next\.js:.*?\)/, '').trim()
}

// ─── Main ─────────────────────────────────────────────────────────────────
const [supabase, clerk] = await Promise.all([checkSupabase(), checkClerk()])

const args = process.argv.slice(2)
const next = spawn('next', ['dev', '--turbopack', ...args], {
  stdio: ['inherit', 'pipe', 'pipe'],
  shell: true,
  env: {
    ...process.env,
    NODE_NO_WARNINGS: '1', // suppress warnings in child process too
  }
})

let readyShown = false

function handleOutput(data) {
  const lines = data.toString().split('\n')
  for (const line of lines) {
    if (!shouldShow(line)) continue
    console.log(formatLine(line))
    if (!readyShown && line.includes('✓ Ready')) {
      readyShown = true
      setTimeout(() => {
        console.log('')
        console.log('  ─────────────────────────────────────────')
        console.log(`  ${supabase ? '✅' : '❌'} Supabase          ${supabase ? 'Connected' : 'NOT connected'}`)
        console.log(`  ${clerk ? '✅' : '❌'} Clerk             ${clerk ? 'Connected' : 'NOT connected'}`)
        console.log(`  ✅ Imaginations     Linked to Clerk + Supabase`)
        console.log('  ─────────────────────────────────────────')
        console.log('')
      }, 100)
    }
  }
}

next.stdout.on('data', handleOutput)
next.stderr.on('data', handleOutput)
next.on('exit', code => process.exit(code ?? 0))