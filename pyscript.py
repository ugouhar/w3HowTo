import os

folder_name = input("Enter feature name: ")
folder_path = "./" + folder_name

def to_lower_camel_case(str):
  camel_string = "".join(x.capitalize() for x in str.lower().split("-"))
  return str[0].lower() + camel_string[1:]

def create_folder():
  os.mkdir(folder_path)
   
def create_files():
  html_file_name = "index.html"
  css_file_name = to_lower_camel_case(folder_name) + ".css"
  js_file_name = to_lower_camel_case(folder_name) + ".js"


  html_file_path = folder_path + "/" + html_file_name
  css_file_path = folder_path + "/" + css_file_name
  js_file_path = folder_path + "/" + js_file_name

  with open(html_file_path, 'w') as fp:
      pass

  with open(css_file_path, 'w') as fp:
      pass

  with open(js_file_path, 'w') as fp:
      pass
  

create_folder()
create_files()