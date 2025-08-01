# Web Development Project 7 - Catmates Crewmates App

**Submitted by:** Cinthia Ochoa

**Description:**
This web app allows users to create, view, update, and delete custom "Catmates" — intergalactic feline crewmates with various attributes like name, speed, color, and skill. Users can manage their crew via a clean dashboard featuring a fixed sidebar, create forms, a gallery, and detail/edit pages for each crewmate.

**Time spent:** Approximately 10 hours

---

## Required Features

The following **required** functionality is completed:

* [x] **Create form to add a new crewmate**

  * Users can name the crewmate
  * Users can set the crewmate’s attributes (color, skill, speed)

* [x] **Summary page listing all crewmates**

  * Displays all added crewmates
  * Sorted by creation date with most recent on top

* [x] **Update existing crewmate**

  * Edit button available on summary page
  * Shows current attribute values
  * Changes immediately reflected after update

* [x] **Delete crewmate**

  * Delete button available on edit form
  * Deleted crewmates are removed from summary page

* [x] **Unique URL for each crewmate’s detail page**

  * Clicking crewmate navigates to detail page
  * Detail page shows extra info about crewmate
  * Link to edit form from detail page

---

## Optional Features

* [ ] Category-based attribute restrictions (Not implemented)
* [ ] Summary statistics about the crew (Not implemented)
* [ ] Custom success metric affecting UI (Not implemented)

---

## Additional Features

* [x] Fixed sidebar for easy navigation
* [x] Responsive layout using Tailwind CSS
* [x] Smooth page transitions with framer-motion (in form)

---

## Video Walkthrough

Here's a walkthrough of implemented user stories:

[Video Walkthrough](https://imgur.com/a/UMjpnWu.gif)

---

## Notes

* Styling and layout were adjusted using Tailwind CSS to achieve a dashboard-like UI with a fixed sidebar and a scrollable main content area.
* Supabase was used for backend database CRUD operations via the supabase-js client.
* Challenges included getting layout spacing correct to avoid content being hidden under the sidebar and ensuring page routing works smoothly.
* Some advanced features like category restrictions and success metrics were left for future improvements.

