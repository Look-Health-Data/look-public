// noinspection JSUnusedGlobalSymbols
export default {
  Mutation: {
    changeShowType: (_, { show_type }, { cache }) => {
      // noinspection JSUnresolvedFunction
      cache.writeData({ data: { show_type } });
      return { show_type, __typename: 'ShowType' };
    },
    sidebarOpenClose: (_, { sidebar_visibility }, { cache }) => {
      // noinspection JSUnresolvedFunction
      cache.writeData({ data: { sidebar_visibility } });
      return { sidebar_visibility, __typename: 'SidebarVisibility' };
    },
    sideBarToggle: (_, { sidebar_visibility }, { cache }) => {
      // noinspection JSUnresolvedFunction
      cache.writeData({ data: { sidebar_visibility } });
      return { sidebar_visibility, __typename: 'SidebarVisibility' };
    },
  }
};
