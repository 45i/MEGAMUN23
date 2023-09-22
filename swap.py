import os
from bs4 import BeautifulSoup

# Define the meta tags you want to add
meta_tags = """
<meta name="description" content="Official MEGAMUN'23 website">
<meta name="og:site_name" content="MEGAMUN'23">
<meta property="og:image" content="megamun.png">
<link rel="icon" href="megamun.png" type="image/x-icon">
<meta name="theme-color" content="#2A1472">
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
