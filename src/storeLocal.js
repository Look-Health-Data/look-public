const src = {
  ui: {
    components: {
      sidebar: {
        visibility: {
          'hidden': false,
          'visible': true,
        }['hidden']  // default
        // visibility: true
      }
    }
  }
};

export const localStore = {
  show_type: 'BELOW_15',
  sidebar_visibility: src.ui.components.sidebar.visibility,
};
