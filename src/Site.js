// Imports.Core
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import Sidebar from './static/components/sidebar';
import loadjs from 'loadjs';

// const mql = window.matchMedia(`(min-width: 800px)`);

// App
class Site extends Component {
  // changeShow = type => {
  //   this.props.mutate({
  //     variables: { show_type: type }
  //   });
  // };
  
  sideBarToggle = () => {
    this.props.mutate({
      variables: { sidebar_visibility: !this.props.sidebar_visibility }
    });
  };
  
  componentWillMount() {
    loadjs('https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js', () => {
      loadjs('/static/js/browser.min.js');
      loadjs('/static/js/breakpoints.min.js', () => {
        loadjs('/static/js/util.js');
        loadjs('/static/js/main.js');
      });
      loadjs('//www.socialintents.com/api/socialintents.1.3.js#2c9fa56361a823200161a9a0d2de005b');
    });
  }
  
  render() {
    // const { showTypeQuery, httpQuery } = this.props;
    //
    // const testValue = showTypeQuery.show_type;
    
    // const testValue = () => {
    //   if (showTypeQuery.show_type === 'BELOW_15') {
    //     return 'below 15';
    //   }
    //   return 'above 15';
    // };
    
    // noinspection JSRemoveUnnecessaryParentheses
    // noinspection HtmlUnknownAnchorTarget
    return (
      <React.Fragment>
        <Helmet>
          <title>Health Hub</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <link rel="stylesheet" href="static/css/main.css" />
          {/*<script src="static/js/jquery.min.js" type="text/javascript" />*/}
          {/*<script src="static/js/browser.min.js" type="text/javascript" />*/}
          {/*<script src="static/js/breakpoints.min.js" type="text/javascript" />*/}
          {/*<script src="static/js/util.js" type="text/javascript" />*/}
          {/*<script src="static/js/main.js" type="text/javascript" />*/}
          {/*<script src="//www.socialintents.com/api/socialintents.1.3.js#2c9fa56361a823200161a9a0d2de005b" async="async" type="text/javascript"/>*/}
        </Helmet>

        {/*Header*/}
        <header id="header">
          <a className="logo" href={"index.html"}>HEALTH HUB</a>
          <nav>
            <a href={"#menu"} onClick={() => this.sideBarToggle()}>Menu</a>
          </nav>
        </header>
  
  
  
        {/* Nav */}
        {/*<nav id="menu">*/}
          {/*<ul className="links">*/}
                        {/*/!* TODO: Get these links to work*!/*/}
                        {/*/!*I don't know what wrapping in curlies does. *!/*/}
            {/*<li><a href="index.html">Home</a></li>*/}
            {/*<li><a href="elements.html">Elements</a></li>*/}
            {/*<li><a href="generic.html">Generic</a></li>*/}
          {/*</ul>*/}
        {/*</nav>*/}
  
  
  
        {/* Banner */}
        <section id="banner">
  
          {/*<div>*/}
          <div style={{opacity: 0.5, zIndex: 2}}>
            {/*<h1>Epic</h1>*/}
            {/*<h1>Finally</h1>*/}
            <h1>At long last</h1>
            {/*<p>A digital health assistant that puts your health data in <em>your</em> control.</p>*/}
            <p>A digital health assistant that puts your health data in <em>your</em> control.</p>
              {/*<br/>*/}
            {/*See what it feels like</p>*/}
            <br/>
            {/*<a href="" className="button">Take the tour</a>*/}
            {/*<span>          </span>*/}
            {/*<a href="" className="button">Get started</a>*/}
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
              <Link to="/home" className="button" style={{width: '150px'}}>Take the tour</Link>
              <Link to="/home" className="button" style={{width: '150px'}}>Get started</Link>
            </div>
          </div>
          <video autoPlay={true} loop muted playsInline={true} src="static/media/mov/banner.mp4"/>
        </section>
  
        {/* Highlights */}
        <section className="wrapper">
          <div className="inner">
            <header className="special">
              <h2>About</h2>
              <p style={{fontSize: '1.8rem'}}><em>Health Hub</em> is a digital health assistant for those seeking to store, understand, and selectively share their health data.</p>
            </header>
          </div>
        </section>
  
        {/* Ecosystem */}
        <section id="domain" className="wrapper red-banner">
          <div className="inner">
            <h2>What is personal health data management?</h2>
            <p>Personal health data management is an exciting, nascent area.
              Traditionally, clinical health data resides in hard to access hospital medical records and in non-machine-readable format, dramatically limiting their usefulness.
              If you're lucky, you can access your health data via a portal, but it is rare if ever that it is linked between hospital departments and clinicians, meaning it's not on one place.
              In addition to clinical health data, you may other, personally recorded physical, mental, or emotional health data stored in multiple places, such as apps, notes, or your calendar.</p>
            {/*<p style={{fontSize: '1.2rem';}}>*/}
              {/* - <a href="https://www.fitbit.com/">Fitbit</a> helps with your exercise data,<br/>*/}
              {/* - <a href="https://play.google.com/store/apps/details?id=com.northcube.sleepcycle&hl=en">Sleep Cycle</a> records your sleep patterns,<br/>*/}
              {/* - <a href="https://itunes.apple.com/us/app/myfitnesspal/id341232718?mt=8">MyFitnessPal</a> counts your calories,<br/>*/}
              {/* - <a href="http://www.habitbull.com/">HabitBull</a> tracks your habits,<br/>*/}
              {/* - A Good old-fashioned calendar allows you to track anything, but is inherently limited.*/}
            {/*</p>*/}
            <p style={{fontSize: '1.8rem'}}>Personal health data management allows you to store all of this in <em>one</em> secure place and under <em>your</em> control.</p>
          </div>
        </section>
  
        {/* Features */}
        <section className="wrapper">
          <div className="inner">
            <header className="special">
              <h2>Features</h2>
              <p>Lorem ipsum yada yada yada</p>
            </header>
            <div className="highlights">
              <section>
                <div className="content">
                  <header>
                    {/*<a href='#secure' className="icon fa-lock"><span className="label">Icon</span></a>*/}
                    {/*<h3>Secure</h3>*/}
                    <a href='#clinical' role='button' className="icon fa-stethoscope"><span className="label">Icon</span></a>
                    <h3>Clinical</h3>
                  </header>
                  <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
                </div>
              </section>
              <section>
                <div className="content">
                  <header>
                    <a href='#analytical' className="icon fa-line-chart"><span className="label">Icon</span></a>
                    <h3>Analytical</h3>
                  </header>
                  <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
                </div>
              </section>
              <section>
                <div className="content">
                  <header>
                    {/*<a href='#everywhere' className="icon fa-mobile"><span className="label">Icon</span></a>*/}
                    {/*<h3>Everywhere</h3>*/}
                    <a href='#personal' className="icon fa-bicycle"><span className="label">Icon</span></a>
                    <h3>Personal</h3>
                  </header>
                  <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
                </div>
              </section>
  
              <section>
                <div className="content">
                  <header>
                    {/*<a href='#clinical' className="icon fa-stethoscope"><span className="label">Icon</span></a>*/}
                    {/*<h3>Clinical</h3>*/}
                    <a href='#everywhere' className="icon fa-mobile"><span className="label">Icon</span></a>
                    <h3>Everywhere</h3>
                  </header>
                  <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
                </div>
              </section>
              <section>
                <div className="content">
                  <header>
                    {/*<a href='#clinical' className="icon fa-stethoscope"><span className="label">Icon</span></a>*/}
                    {/*<h3>Clinical</h3>*/}
                    <a href='#conversational' className="icon fa-microphone"><span className="label">Icon</span></a>
                    <h3>Conversational</h3>
                  </header>
                  <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
                </div>
              </section>
              {/*<section>*/}
                {/*<div className="content">*/}
                  {/*<header>*/}
                    {/*<a href='#blank' className="icon fa-paper-plane-o"><span className="label">Icon</span></a>*/}
                    {/*<h3>Faucibus consequat</h3>*/}
                  {/*</header>*/}
                  {/*<p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>*/}
                {/*</div>*/}
              {/*</section>*/}
              <section>
                <div className="content">
                  <header>
                    {/*<a href='#personal' className="icon fa-bicycle"><span className="label">Icon</span></a>*/}
                    {/*<h3>Personal</h3>*/}
                    <a href='#secure' className="icon fa-lock"><span className="label">Icon</span></a>
                    <h3>Secure</h3>
                  </header>
                  <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
                </div>
              </section>
            </div>
          </div>
        </section>
  
        {/* The Ecosystem */}
        <section className="wrapper red-banner">
          <div className="inner">
            <h2>The Personal Health Data Ecosystem</h2>
            <p><a href="https://www.fitbit.com/">Fitbit</a> helps with your exercise data.
              <a href="https://play.google.com/store/apps/details?id=com.northcube.sleepcycle&hl=en">Sleep Cycle</a> records your sleep patterns.
              <a href="https://itunes.apple.com/us/app/myfitnesspal/id341232718?mt=8">MyFitnessPal</a> counts your calories.
              <a href="http://www.habitbull.com/">HabitBull</a> tracks your habits.
              A Good old-fashioned calendar allows you to track anything, but is inherently limited.
            </p>
            {/*<p>*/}
               {/* - <a href="https://www.fitbit.com/">Fitbit</a> helps with your exercise data,<br/>*/}
               {/* - <a href="https://play.google.com/store/apps/details?id=com.northcube.sleepcycle&hl=en">Sleep Cycle</a> records your sleep patterns,<br/>*/}
               {/* - <a href="https://itunes.apple.com/us/app/myfitnesspal/id341232718?mt=8">MyFitnessPal</a> counts your calories,<br/>*/}
               {/* - <a href="http://www.habitbull.com/">HabitBull</a> tracks your habits,<br/>*/}
               {/* - A Good old-fashioned calendar allows you to track anything, but is inherently limited.*/}
            {/*</p>*/}
            <h3>How is Health Hub Different?</h3>
            <p>
              The services above are phenomenal examples of capturing very specific use cases of your health data.
              If interested in any of the above categories, those specific names mentioned are great options.
              If you need a place to integrate and utilize all of this information, that's what Health Hub is here for.
            </p>
            <p>
              In addition to integrating with various services, Health Hub also provides ways for you to record data using the <a href="">web</a>,
              <a href="">mobile app</a>,
              <a href="">text message</a>, and <a href="">voice assistant</a>. Several options, for ultimate convenience.
            </p>
          </div>
        </section>
  
        {/* Testimonials */}
        <section className="wrapper">
          <div className="inner">
            <header className="special">
              <h2>Testimonials</h2>
              <p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.</p>
            </header>
            <div className="testimonials">
              <section>
                <div className="content">
                  <blockquote>
                    <p>My mother has chronic illness and has a lot of specialists. Unfortunately, they store health information in different places, and sharing it between two doctors is a pain. <em>Look</em> helps us keep her health data all in one place and see it together. It can also shave off days we need to send test results between clinics.</p>
                  </blockquote>
                  <div className="author">
                    <div className="image">
                      <img src="static/media/img/pic01.jpg" alt="" />
                    </div>
                    <p className="credit">- <strong>Joey</strong> <span>{/* title */}</span></p>
                  </div>
                </div>
              </section>
              <section>
                <div className="content">
                  <blockquote>
                    <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
                  </blockquote>
                  <div className="author">
                    <div className="image">
                      <img src="static/media/img/pic03.jpg" alt="" />
                    </div>
                    <p className="credit">- <strong>John Doe</strong> <span>CEO - ABC Inc.</span></p>
                  </div>
                </div>
              </section>
              <section>
                <div className="content">
                  <blockquote>
                    <p><em>Look</em> helps me take my personal health calendar and put it into a format that I can share with my doctor quickly and effectively. This is especially useful, given that our appointments are only 15 minutes.</p>
                  </blockquote>
                  <div className="author">
                    <div className="image">
                      <img src="static/media/img/pic02.jpg" alt="" />
                    </div>
                    <p className="credit">- <strong>Ashley</strong> <span> {/* title */}</span></p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        
        {/*Call-to-Action (CTA)*/}
        <section className="wrapper red-banner">
          <div className="inner">
            <h2>What are you waiting for?</h2>
            {/*<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida.</p>*/}
            <br/><br/>
            <a href="" className="button">Get started</a>
          </div>
        </section>
  
        {/* Footer */}
        <footer id="footer">
          <div className="inner">
            <div className="content">
              <section>
                <h3>Accumsan montes viverra</h3>
                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida.</p>
              </section>
              <section>
                <h4>Sem turpis amet semper</h4>
                <ul className="alt">
                  <li><a href='#1'>Dolor pulvinar sed etiam.</a></li>
                  <li><a href='#2'>Etiam vel lorem sed amet.</a></li>
                  <li><a href='#3'>Felis enim feugiat viverra.</a></li>
                  <li><a href='#4'>Dolor pulvinar magna etiam.</a></li>
                </ul>
              </section>
              <section>
                <h4>Magna sed ipsum</h4>
                <ul className="plain">
                  <li><a href='#5'><i className="icon fa-twitter">&nbsp;</i>Twitter</a></li>
                  <li><a href='#6'><i className="icon fa-facebook">&nbsp;</i>Facebook</a></li>
                  <li><a href='#7'><i className="icon fa-instagram">&nbsp;</i>Instagram</a></li>
                  <li><a href='#8'><i className="icon fa-github">&nbsp;</i>Github</a></li>
                </ul>
              </section>
            </div>
            <div className="copyright">
              &copy; <a href="http://www.joeflack.net">Joe Flack</a>, 2017
            </div>
          </div>
        </footer>
      
        <Sidebar/>
        
        {/* - Works - */}
        {/*<button onClick={() => this.changeShow('BELOW_15')}>Below $15</button>*/}
        {/*<button onClick={() => this.changeShow('ABOVE_15')}>Above $15</button>*/}
        {/*{testValue}*/}
      
		  </React.Fragment>
    );
  }
}

// #Queries
// const showTypeQuery = gql`
//  query showTypeQuery {
//    show_type @client
//  }
// `;
//
// const showTypeMutation = gql`
//  mutation showTypeMutation($show_type: String!) {
//    changeShowType(show_type: $show_type) @client {
//      show_type
//    }
//  }
// `;

const sideBarToggle = gql`
 mutation sideBarToggle($sidebar_visibility: Boolean!) {
   sideBarToggle(sidebar_visibility: $sidebar_visibility) @client {
     sidebar_visibility
   }
 }
`;

// #Export
export default compose(
  // graphql(showTypeQuery, { name: 'showTypeQuery' }),
  // graphql(showTypeMutation),
  graphql(sideBarToggle)
)(Site);
