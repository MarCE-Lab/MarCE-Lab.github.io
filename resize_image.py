from PIL import Image
import os

if __name__ == "__main__":
    
    for i in os.listdir("./gallery_image"):
        img_path = os.path.join("./gallery_image", i)
        img = Image.open(img_path)
        img.resize((1920, 1080))
        img.save(img_path)