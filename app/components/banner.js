
const React = require('react');

const ResumePropTypes = require('../prop_types/resume');
const SocialMedia = require('./social_media');

const Banner = React.createClass({
    propTypes: {
        basics: ResumePropTypes.basics,
        quotes: ResumePropTypes.references
    },

    render: function () {
        return (
            <div className='row banner'>
                <div className='banner-text'>
                    <h1 className='responsive-headline'>
                        {this.props.basics.name}
                    </h1>
                    <br/>
                    <h1 style={{fontSize: 'medium',fontStyle: 'italic'}}>
                        "Strive not to be a success, but rather to be of value."
                    </h1>
                    <h1 style={{fontSize: 'smaller'}}>- Albert Einstien</h1>
                    { /* <div>{this.props.referenences.entry.reference}</div> */ }
                    <br/>
                    <hr/>
                    <SocialMedia ulClass='social' profiles={this.props.basics.profiles}/>
                </div>
            </div>
        );
    }
});

module.exports = Banner;
