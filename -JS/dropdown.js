document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    
    // Close all dropdowns if clicking outside
    if (!isDropdownButton && e.target.closest("[data-dropdown]") == null) {
      document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        dropdown.classList.remove('active');
      });
      return;
    }
  
    // Prevent dropdown from closing when clicking inside the dropdown
    if (e.target.closest("[data-dropdown]") && !isDropdownButton) {
      return; // Do nothing if clicking inside the dropdown content
    }
  
    // Toggle dropdown if clicking on the dropdown button
    let selectedDropdown;
    if (isDropdownButton) {
      selectedDropdown = e.target.closest("[data-dropdown]");
      selectedDropdown.classList.toggle('active');
    }
  
    // Close other active dropdowns
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === selectedDropdown) return;
      dropdown.classList.remove('active');
    });
  });
  