import re, os

assets_dir = "C:\\Users\\Abdullah Ramadan\\Documents\\kimi\\workspace\\assets\\webfonts"

def modify_fa5():
    path = os.path.join(assets_dir, "fontawesome-5-free.css")
    with open(path, "r", encoding="utf-8", errors="ignore") as f:
        css = f.read()
    
    original = css
    
    # Remove element-level font-family rules
    css = re.sub(r'\.fab\{font-family:"Font Awesome 5 Brands"\}', '', css)
    css = re.sub(r'\.fa,\.far,\.fas\{font-family:"Font Awesome 5 Free"\}', '', css)
    
    # Remove element-level font-weight rules
    css = re.sub(r'\.fab,\.far\{font-weight:400\}', '', css)
    css = re.sub(r'\.fa,\.fas\{font-weight:900\}', '', css)
    
    # Clean up double semicolons and empty braces
    css = re.sub(r'\{\}', '', css)
    css = re.sub(r';+', ';', css)
    css = re.sub(r'\{\s*;*\s*\}', '', css)
    
    # Add ::before rules at the end
    append = '\n/* Phenix: font properties moved to ::before */\n'
    append += '.fab::before{font-family:"Font Awesome 5 Brands"}\n'
    append += '.fa::before,.far::before,.fas::before{font-family:"Font Awesome 5 Free"}\n'
    append += '.fab::before,.far::before{font-weight:400}\n'
    append += '.fa::before,.fas::before{font-weight:900}\n'
    
    css = css.rstrip() + append
    
    with open(path, "w", encoding="utf-8") as f:
        f.write(css)
    
    print(f"FA5: {len(original)} -> {len(css)} bytes")
    return len(original) - len(css)

def modify_fa6():
    path = os.path.join(assets_dir, "fontawesome-6-free.css")
    with open(path, "r", encoding="utf-8", errors="ignore") as f:
        css = f.read()
    
    original = css
    
    # Remove element-level font-family rules
    css = re.sub(r'\.fa-classic,\.fa-regular,\.fa-solid,\.far,\.fas\{font-family:"Font Awesome 6 Free"\}', '', css)
    css = re.sub(r'\.fa-brands,\.fab\{font-family:"Font Awesome 6 Brands"\}', '', css)
    
    # Remove element-level font-weight rules
    css = re.sub(r'\.fa-brands,\.fab\{font-weight:400\}', '', css)
    css = re.sub(r'\.fa-regular,\.far\{font-weight:400\}', '', css)
    css = re.sub(r'\.fa-solid,\.fas\{font-weight:900\}', '', css)
    
    # Clean up
    css = re.sub(r'\{\}', '', css)
    css = re.sub(r';+', ';', css)
    css = re.sub(r'\{\s*;*\s*\}', '', css)
    
    # Add ::before rules at the end
    append = '\n/* Phenix: font properties moved to ::before */\n'
    append += '.fa-classic::before,.fa-regular::before,.fa-solid::before,.far::before,.fas::before{font-family:"Font Awesome 6 Free"}\n'
    append += '.fa-brands::before,.fab::before{font-family:"Font Awesome 6 Brands"}\n'
    append += '.fa-brands::before,.fab::before{font-weight:400}\n'
    append += '.fa-regular::before,.far::before{font-weight:400}\n'
    append += '.fa-solid::before,.fas::before{font-weight:900}\n'
    
    css = css.rstrip() + append
    
    with open(path, "w", encoding="utf-8") as f:
        f.write(css)
    
    print(f"FA6: {len(original)} -> {len(css)} bytes")
    return len(original) - len(css)

# Run modifications
fa5_diff = modify_fa5()
fa6_diff = modify_fa6()

# Verify
print("\n=== Verification ===")
for ver in [5, 6]:
    path = os.path.join(assets_dir, f"fontawesome-{ver}-free.css")
    with open(path, "r", encoding="utf-8", errors="ignore") as f:
        css = f.read()
    
    # Check for element-level font-family (should be none except @font-face)
    elem_rules = re.findall(r'\{[^}]*font-family:[^}]*\}', css)
    # Filter out @font-face and ::before rules
    elem_only = [r for r in elem_rules if 'src:' not in r and '::before' not in r and '@font-face' not in r]
    print(f"FA{ver}: Element-level font-family rules remaining: {len(elem_only)}")
    if elem_only:
        print(f"  Found: {elem_only[:3]}")

    # Check ::before rules at end
    before_rules = re.findall(r'\.\w+::before\{[^}]*font-family[^}]*\}', css)
    print(f"FA{ver}: ::before font-family rules: {len(before_rules)}")

print(f"\nDone. FA5 removed ~{fa5_diff} bytes, FA6 removed ~{fa6_diff} bytes.")

def main(ctx):
    return {"fa5": fa5_diff, "fa6": fa6_diff}
