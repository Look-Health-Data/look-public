/* eslint-disable */
/* eslint-disable-next-line */
// #Imports
import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import SidebarBase from '@health-hub/react-sidebar';
import './sidebar.css'

// import styles from '../css/main.css'
// Module not found: Can't resolve '../../images/banner.jpg' in '/Users/joeflack4/projects/look-web-client/src/site/static/css'

// - Resources
//   - Sidebar Docs:  https://github.com/balloob/react-sidebar
//   - React Styles Guide:  https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822
//   - Industrious Theme: file:///Users/joeflack4/projects/look-web-client/_dev/static/templates/chosen/templated-industrious/index.html

// #Component
class AppSidebar extends Component {
  
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     sidebarOpen: true  // Toggle
  //   };
  //
  //   this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  // }
  //
  // onSetSidebarOpen = function(open) {
  //   this.setState({sidebarOpen: open});
  // };
  
  sidebarClose = () => {  // (1) doesn't seem to be being used below
    this.props.mutate({
      variables: { sidebar_visibility: false }
    });
  };
  
  render() {
    const { sidebarVisibility } = this.props;
    const visible = sidebarVisibility.sidebar_visibility;
    
    // noinspection HtmlUnknownTarget, HtmlUnknownAnchorTarget
    let sidebarContent = [
        <ul className="links" key={'links'}>
          <li key={'index'}><a href="index.html">Home</a></li>
          <li key={'elements'}><a href="elements.html">Elements</a></li>
          <li key={'generic'}><a href="generic.html">Generic</a></li>
        </ul>,
        <a href="#menu" role="button" className="close" key={'close'} onClick={() => this.sidebarClose()}/>,
    ];
        
    // noinspection HtmlUnknownTarget, HtmlUnknownAnchorTarget
    return (
      <SidebarBase
        sidebar={sidebarContent}
        // open={this.state.sidebarOpen}
        sideBarElement={'nav'}
        sidebarId={'menu'}
        open={visible}
        // onSetOpen={this.onSetSidebarOpen}
        styles={{}}  // Using stylesheet. This Overrides default.
        pullRight={true}
        id={'menu'}
        externalStylesOnly={true}
        // sidebarClassName={'menu'}
      > </SidebarBase>
    );
  }
}

// #Queries
// TODO: Access from nested structure.
const sidebarVisibility = gql`
 query sidebarVisibility {
   sidebar_visibility @client
 }
`;

// (1)
// (2) Also, should this be Boolean! ?
const sidebarOpenClose = gql`
 mutation sidebarOpenClose($sidebar_visibility: String!) {
   sidebarOpenClose(sidebar_visibility: $sidebar_visibility) @client {
     sidebar_visibility
   }
 }
`;

// #Exports
export default compose(
  graphql(sidebarVisibility, { name: 'sidebarVisibility' }),
  graphql(sidebarOpenClose)
)(AppSidebar);
