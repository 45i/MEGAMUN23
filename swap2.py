import os
from bs4 import BeautifulSoup

# Define the meta tags you want to add
meta_tags = """
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
"""

# List of HTML files to update
html_files = [file for file in os.listdir() if file.endswith(".html")]
  # Add all your HTML files here

# Loop through each HTML file and add the meta tags
for file_name in html_files:
    print(file_name)
    with open(file_name, "r") as file:
        html_content = file.read()

    soup = BeautifulSoup(html_content, "html.parser")
    head_tag = soup.find("head")

    if head_tag:
        head_tag.insert(0, BeautifulSoup(meta_tags, "html.parser"))

    with open(file_name, "w") as file:
        file.write(str(soup))
