#!/usr/bin/env python3
import json
import os
from datetime import datetime
from pathlib import Path

# Update data directory to be in client/public/data
DATA_DIR = Path(__file__).parent / 'client' / 'public' / 'data'
DATA_DIR.mkdir(parents=True, exist_ok=True)

def read_json_file(filename):
    """Read data from a JSON file."""
    file_path = DATA_DIR / filename
    if not file_path.exists():
        if filename == 'projects.json':
            return {"projects": []}
        elif filename == 'blog-posts.json':
            return {"posts": []}
        elif filename == 'certifications.json':
            return {"certifications": []}
        elif filename == 'education.json':
            return {"education": []}
    with open(file_path, 'r') as f:
        return json.load(f)

def write_json_file(filename, data):
    """Write data to a JSON file."""
    with open(DATA_DIR / filename, 'w') as f:
        json.dump(data, f, indent=2)
    print(f"✅ Successfully wrote to {filename}")

def add_project():
    """Interactive function to add a new project."""
    print("\n=== Adding New Project ===")
    data = read_json_file('projects.json')
    projects = data.get('projects', [])

    new_id = max([p.get('id', 0) for p in projects], default=0) + 1

    project = {
        'id': new_id,
        'title': input("Project title: "),
        'description': input("Project description: "),
        'technologies': input("Technologies (comma-separated): "),
        'image_url': input("Image URL: "),
        'github_url': input("GitHub URL (press Enter to skip): ") or None,
        'live_url': input("Live URL (press Enter to skip): ") or None,
        'created_at': datetime.utcnow().isoformat()
    }

    projects.append(project)
    write_json_file('projects.json', {'projects': projects})
    print(f"✅ Project added successfully with ID: {new_id}")

def add_blog_post():
    """Interactive function to add a new blog post."""
    print("\n=== Adding New Blog Post ===")
    data = read_json_file('blog-posts.json')
    posts = data.get('posts', [])

    new_id = max([p.get('id', 0) for p in posts], default=0) + 1

    post = {
        'id': new_id,
        'title': input("Blog title: "),
        'content': input("Blog content (HTML supported): "),
        'category': input("Category: "),
        'tags': [tag.strip() for tag in input("Tags (comma-separated): ").split(',')],
        'reading_time': int(input("Reading time (in minutes): ")),
        'created_at': datetime.utcnow().isoformat()
    }

    posts.append(post)
    write_json_file('blog-posts.json', {'posts': posts})
    print(f"✅ Blog post added successfully with ID: {new_id}")

def add_certification():
    """Interactive function to add a new certification."""
    print("\n=== Adding New Certification ===")
    data = read_json_file('certifications.json')
    certifications = data.get('certifications', [])

    new_id = max([c.get('id', 0) for c in certifications], default=0) + 1

    certification = {
        'id': new_id,
        'name': input("Certification name: "),
        'organization': input("Organization: "),
        'date_achieved': datetime.strptime(input("Date achieved (YYYY-MM-DD): "), "%Y-%m-%d").isoformat(),
        'description': input("Description: "),
        'verification_url': input("Verification URL (press Enter to skip): ") or None
    }

    certifications.append(certification)
    write_json_file('certifications.json', {'certifications': certifications})
    print(f"✅ Certification added successfully with ID: {new_id}")

def add_education():
    """Interactive function to add new education details."""
    print("\n=== Adding New Education ===")
    data = read_json_file('education.json')
    education_list = data.get('education', [])

    new_id = max([e.get('id', 0) for e in education_list], default=0) + 1

    print("Enter achievements (one per line, press Enter twice to finish):")
    achievements = []
    while True:
        achievement = input("Achievement (or press Enter to finish): ")
        if not achievement:
            break
        achievements.append(achievement)

    print("\nEnter coursework (one per line, press Enter twice to finish):")
    coursework = []
    while True:
        course = input("Course (or press Enter to finish): ")
        if not course:
            break
        coursework.append(course)

    education = {
        'id': new_id,
        'institution': input("Institution name: "),
        'degree': input("Degree name: "),
        'dates': input("Date range (e.g., 2020-2024): "),
        'achievements': achievements,
        'coursework': coursework
    }

    education_list.append(education)
    write_json_file('education.json', {'education': education_list})
    print(f"✅ Education entry added successfully with ID: {new_id}")

def list_items(filename):
    """List all items from a specified JSON file."""
    try:
        data = read_json_file(filename)
        print(f"\n=== {filename.split('.')[0].title()} ===")
        for item in data.get(filename.split('.')[0].replace('.json', ''), []):
            print(json.dumps(item, indent=2))
            print("-" * 40)
    except Exception as e:
        print(f"❌ Error listing items: {e}")

def main_menu():
    """Display the main menu and handle user input."""
    while True:
        print("\n=== Portfolio Content Manager ===")
        print("1. Add Project")
        print("2. Add Blog Post")
        print("3. Add Certification")
        print("4. Add Education")
        print("5. List Projects")
        print("6. List Blog Posts")
        print("7. List Certifications")
        print("8. List Education")
        print("0. Exit")

        choice = input("\nEnter your choice (0-8): ")

        try:
            if choice == "1":
                add_project()
            elif choice == "2":
                add_blog_post()
            elif choice == "3":
                add_certification()
            elif choice == "4":
                add_education()
            elif choice == "5":
                list_items('projects.json')
            elif choice == "6":
                list_items('blog-posts.json')
            elif choice == "7":
                list_items('certifications.json')
            elif choice == "8":
                list_items('education.json')
            elif choice == "0":
                print("Goodbye!")
                break
            else:
                print("Invalid choice. Please try again.")
        except Exception as e:
            print(f"\n❌ An error occurred: {e}")
            print("Please try again.")

if __name__ == "__main__":
    try:
        # Ensure all JSON files exist with proper structure
        for filename in ['projects.json', 'blog-posts.json', 'certifications.json', 'education.json']:
            if not (DATA_DIR / filename).exists():
                default_data = {filename.split('.')[0].replace('-', '_'): []}
                write_json_file(filename, default_data)
        main_menu()
    except KeyboardInterrupt:
        print("\nProgram terminated by user.")
    except Exception as e:
        print(f"An error occurred: {e}")