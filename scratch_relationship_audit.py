import os
import re

docs_dir = r"c:\projects\vanish\docs"
files = [f for f in os.listdir(docs_dir) if f.startswith("ch") and f.endswith(".md")]
files.sort()

# 我们统计的情感关键词
relationship_keywords = [
    "共感", "替伤", "信任", "并肩", "宿命", "笑", "温柔", "释然", "站长", "老董", "调度"
]

report_path = r"c:\projects\vanish\scratch_relationship_report.txt"
with open(report_path, "w", encoding="utf-8") as out:
    out.write("=== Novel Characters Relationships Audit ===\n\n")
    
    matches = []
    for file in files:
        path = os.path.join(docs_dir, file)
        ch_num = file.split(".")[0]
        with open(path, "r", encoding="utf-8", errors="ignore") as f:
            lines = f.readlines()
        for idx, line in enumerate(lines, 1):
            for kw in relationship_keywords:
                # 如果这一行里同时出现了主要角色中的两个，或者是情感关键词
                # 比如 江临 和 沈策，江临 和 老董，江临 和 昔瑶
                found_chars = []
                for c in ["江临", "沈策", "老董", "昔瑶"]:
                    if c in line:
                        found_chars.append(c)
                
                if (len(found_chars) >= 2) or (len(found_chars) == 1 and kw in line):
                    matches.append((ch_num, idx, kw, line.strip()))
                    break
                    
    out.write(f"Total relationship-related references found: {len(matches)}\n\n")
    for ch, l_num, kw, text in matches[:80]: # 打印前 80 条代表性叙事
        out.write(f"  [{ch}:L{l_num}] (Keyword: {kw}) {text}\n")

print("Relationship audit complete.")
