$$$$$$$$$$$$$$$$$$$$$$$$$
Library Management System
$$$$$$$$$$$$$$$$$$$$$$$$$

Key Features
Core Features
Responsive Design: Fully responsive for mobile, tablet, and desktop.
Secure Environment: Firebase and MongoDB credentials secured with environment variables.
Dynamic Title: Website title updates dynamically based on the current route.


############
Navigation:
############


Navbar: Includes Home, All Books, Add Book, Borrowed Books, Login, and Register links with conditional rendering.
Footer: Present on all pages (except 404), with relevant information and an attractive design.
Authentication



##############Login Page:
#############


Email/Password-based login with validation and social login (Google/GitHub).
Redirect to the Register page.
Register Page:
Form fields include Name, Email, PhotoURL, and Password with validation.
Displays success/error notifications via toast or sweet alerts.
 

##########Home Page:
##############

Banner/Slider with at least three slides and meaningful content.
Book Categories Section: Displays four book category cards. Clicking navigates to category-specific books.
Two additional meaningful sections.


##################
All Books Page (Private Route):
##################



Displays book details with a filter for available books and options to switch between Card View and Table View.
Update button for editing book details.


####################
Add Book Page (Private Route):
####################

Form to add books with fields for image, title, quantity, author, category, description, and rating.


####################
Borrowed Books Page (Private Route):
####################

Displays books borrowed by the logged-in user.
Includes a Return button to update book quantity and remove the book from the list.



################
Details Page (Private Route):
################

Shows comprehensive book details with a Borrow button (includes modal for borrowing functionality).


404 Page:#########
##################

 Custom page for invalid routes.



#################
Advanced Features
#################

Protected Routes: Secured routes redirect unauthenticated users to the login page.
Spinner: Displays while data is loading.
Toast Notifications: For all CRUD operations (add, update, delete, borrow, and return).
JWT Authentication: Secures private routes using tokens.
Borrow Limit: Prevents users from borrowing the same book multiple times until returned.
Optional Features
Animations: Added with Framer Motion for enhanced user experience.
Swiper JS: Used for the banner/slider.
Axios Interceptors: To manage network requests efficiently.
React Hook Form: For better form handling.
Borrowing Limit: Users can borrow a maximum of three books at a time.