#!/usr/bin/env python3
import os
import psycopg2
from psycopg2.extras import RealDictCursor
from datetime import datetime
import json

def get_db_connection():
    """Create a database connection using environment variables."""
    return psycopg2.connect(
        dbname=os.getenv('PGDATABASE'),
        user=os.getenv('PGUSER'),
        password=os.getenv('PGPASSWORD'),
        host=os.getenv('PGHOST'),
        port=os.getenv('PGPORT'),
        cursor_factory=RealDictCursor
    )

def add_project():
    """Interactive function to add a new project."""
    print("\n=== Adding New Project ===")
    project = {
        'title': input("Project title: "),
        'description': input("Project description: "),
        'technologies': input("Technologies (comma-separated): "),
        'image_url': input("Image URL: "),
        'github_url': input("GitHub URL (press Enter to skip): ") or None,
        'live_url': input("Live URL (press Enter to skip): ") or None,
    }
    
    conn = get_db_connection()
    cur = conn.cursor()
    try:
        cur.execute("""
            INSERT INTO projects (title, description, technologies, image_url, github_url, live_url)
            VALUES (%(title)s, %(description)s, %(technologies)s, %(image_url)s, %(github_url)s, %(live_url)s)
            RETURNING id;
        """, project)
        project_id = cur.fetchone()['id']
        conn.commit()
        print(f"✅ Project added successfully with ID: {project_id}")
    except Exception as e:
        conn.rollback()
        print(f"❌ Error adding project: {e}")
    finally:
        cur.close()
        conn.close()

def add_blog_post():
    """Interactive function to add a new blog post."""
    print("\n=== Adding New Blog Post ===")
    blog_post = {
        'title': input("Blog title: "),
        'content': input("Blog content (HTML supported): "),
        'category': input("Category: "),
        'tags': input("Tags (comma-separated): ").split(','),
        'reading_time': int(input("Reading time (in minutes): ")),
    }
    
    conn = get_db_connection()
    cur = conn.cursor()
    try:
        cur.execute("""
            INSERT INTO blog_posts (title, content, category, tags, reading_time)
            VALUES (%(title)s, %(content)s, %(category)s, %(tags)s, %(reading_time)s)
            RETURNING id;
        """, blog_post)
        post_id = cur.fetchone()['id']
        conn.commit()
        print(f"✅ Blog post added successfully with ID: {post_id}")
    except Exception as e:
        conn.rollback()
        print(f"❌ Error adding blog post: {e}")
    finally:
        cur.close()
        conn.close()

def add_certification():
    """Interactive function to add a new certification."""
    print("\n=== Adding New Certification ===")
    certification = {
        'name': input("Certification name: "),
        'organization': input("Organization: "),
        'date_achieved': input("Date achieved (YYYY-MM-DD): "),
        'description': input("Description: "),
        'verification_url': input("Verification URL (press Enter to skip): ") or None,
    }
    
    conn = get_db_connection()
    cur = conn.cursor()
    try:
        cur.execute("""
            INSERT INTO certifications (name, organization, date_achieved, description, verification_url)
            VALUES (%(name)s, %(organization)s, %(date_achieved)s, %(description)s, %(verification_url)s)
            RETURNING id;
        """, certification)
        cert_id = cur.fetchone()['id']
        conn.commit()
        print(f"✅ Certification added successfully with ID: {cert_id}")
    except Exception as e:
        conn.rollback()
        print(f"❌ Error adding certification: {e}")
    finally:
        cur.close()
        conn.close()

def list_items(table_name):
    """List all items from a specified table."""
    conn = get_db_connection()
    cur = conn.cursor()
    try:
        cur.execute(f"SELECT * FROM {table_name} ORDER BY id DESC")
        items = cur.fetchall()
        print(f"\n=== {table_name.title()} ===")
        for item in items:
            print(json.dumps(item, indent=2, default=str))
    except Exception as e:
        print(f"❌ Error listing items: {e}")
    finally:
        cur.close()
        conn.close()

def main_menu():
    """Display the main menu and handle user input."""
    while True:
        print("\n=== Portfolio Content Manager ===")
        print("1. Add Project")
        print("2. Add Blog Post")
        print("3. Add Certification")
        print("4. List Projects")
        print("5. List Blog Posts")
        print("6. List Certifications")
        print("0. Exit")
        
        choice = input("\nEnter your choice (0-6): ")
        
        if choice == "1":
            add_project()
        elif choice == "2":
            add_blog_post()
        elif choice == "3":
            add_certification()
        elif choice == "4":
            list_items("projects")
        elif choice == "5":
            list_items("blog_posts")
        elif choice == "6":
            list_items("certifications")
        elif choice == "0":
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    try:
        main_menu()
    except KeyboardInterrupt:
        print("\nProgram terminated by user.")
    except Exception as e:
        print(f"An error occurred: {e}")
