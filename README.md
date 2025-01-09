# **Github-User-Search**

This repository contains a simple website that allows users to search for any GitHub user by their username. The project uses the **GitHub API** to fetch and display user details dynamically.

---

## **Features**

- **Search for GitHub Users**  
  Enter a username to fetch the user's public profile details.  

- **User Information Display**  
  - Username and avatar.  
  - Bio (if available).  
  - Number of repositories, followers, and following.  

- **Responsive Design**  
  Built with **CSS** and **SASS** for a modern and responsive interface.

---

## **Environment**

### **Technologies Used**
- **HTML**: Structure of the website.  
- **CSS & SASS**: Styling for the website with modular and maintainable CSS.  
- **JavaScript**: Fetches and displays data dynamically.  
- **GitHub API**: Retrieves user profile data.

---

## **Installation**

1. **Clone the Repository**  

2. Compile SASS (Optional)
If you want to modify styles, make sure you have SASS installed and run:

sass styles.scss styles.css


3. Run the Project
Open index.html in any modern web browser to use the application.



---

Usage

1. Open the website in your browser.


2. Enter a GitHub username in the search bar.


3. Press the search button. 


4. View the user details fetched from the GitHub API:

Avatar.

Username and bio.

Repositories, followers, and following count.





---

API Integration

GitHub API

The website uses the GitHub API to fetch public user details.

API endpoint used:

https://api.github.com/users/{username}



---

Future Enhancements

Add error handling for invalid or non-existent usernames.

Display a user's top repositories or recent commits.

Add pagination for users with many repositories, followers, or following.

Implement dark mode toggle for better user experience.



---

Contributing

Contributions are welcome!

1. Fork the repository.


2. Create a new branch for your feature or bugfix.


3. Submit a pull request with detailed information about your changes.




---

License

This project is licensed under the MIT License. See the LICENSE file for more details.


---

Acknowledgments

Thanks to the GitHub API team for providing a robust API and the open-source community for their support and inspiration.