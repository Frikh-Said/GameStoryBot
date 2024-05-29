document.addEventListener("DOMContentLoaded", function() {
    // start: Sidebar
    const sidebarToggle = document.querySelector('.chat-sidebar-profile-toggle');
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentElement.classList.toggle('active');
      });
    }
  
    document.addEventListener('click', function(e) {
      const sidebarProfile = document.querySelector('.chat-sidebar-profile');
      if (sidebarProfile && !e.target.matches('.chat-sidebar-profile, .chat-sidebar-profile *')) {
        sidebarProfile.classList.remove('active');
      }
    });
    // end: Sidebar
  
    // start: Conversation
    const conversationDropdownToggles = document.querySelectorAll('.conversation-item-dropdown-toggle');
    if (conversationDropdownToggles) {
      conversationDropdownToggles.forEach(function(item) {
        item.addEventListener('click', function(e) {
          e.preventDefault();
          if (this.parentElement.classList.contains('active')) {
            this.parentElement.classList.remove('active');
          } else {
            document.querySelectorAll('.conversation-item-dropdown').forEach(function(i) {
              i.classList.remove('active');
            });
            this.parentElement.classList.add('active');
          }
        });
      });
    }
  
    document.addEventListener('click', function(e) {
      if (!e.target.matches('.conversation-item-dropdown, .conversation-item-dropdown *')) {
        document.querySelectorAll('.conversation-item-dropdown').forEach(function(i) {
          i.classList.remove('active');
        });
      }
    });
  
    const conversationFormInputs = document.querySelectorAll('.conversation-form-input');
    if (conversationFormInputs) {
      conversationFormInputs.forEach(function(item) {
        item.addEventListener('input', function() {
          this.rows = this.value.split('\n').length;
        });
      });
    }
  
    const conversationLinks = document.querySelectorAll('[data-conversation]');
    if (conversationLinks) {
      conversationLinks.forEach(function(item) {
        item.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelectorAll('.conversation').forEach(function(i) {
            i.classList.remove('active');
          });
          const conversation = document.querySelector(this.dataset.conversation);
          if (conversation) {
            conversation.classList.add('active');
          }
        });
      });
    }
  
    const conversationBackButtons = document.querySelectorAll('.conversation-back');
    if (conversationBackButtons) {
      conversationBackButtons.forEach(function(item) {
        item.addEventListener('click', function(e) {
          e.preventDefault();
          this.closest('.conversation').classList.remove('active');
          const defaultConversation = document.querySelector('.conversation-default');
          if (defaultConversation) {
            defaultConversation.classList.add('active');
          }
        });
      });
    }
    // end: Conversation
  });
  