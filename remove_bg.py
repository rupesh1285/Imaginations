from PIL import Image

def remove_white_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    newData = []
    for item in datas:
        if item[0] > 235 and item[1] > 235 and item[2] > 235:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
    img.putdata(newData)
    img.save(output_path, "PNG")

remove_white_bg(r"C:\Users\rupes\.gemini\antigravity\brain\25d39114-5a7c-420a-95da-639361a05392\pink_orchid_1778137735291.png", r"d:\Creations\imaginations\public\images\orchid.png")
