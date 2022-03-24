import React, {Component} from "react";
import Typography from '@mui/material/Typography';
import {withStyles} from '@mui/styles';
import {ValueTypes} from '../../constants/ValueTypes';
import {Facebook} from 'react-content-loader';

const styles = theme => ({
    container: {
        minHeight: '100vh',
        backgroundColor: '#eeeeee',
        padding: '10px'
    },
    searchResult: {
        paddingTop: "16px",
        paddingBottom: "16px",
        color: 'black',
        textAlign: 'left',
        margin: '10px',
    },
    paragraph: {
        margin: '15px 0'
    },
    link: {
        paddingRight: '10px'
    }
});

class FormattedContentViewer extends Component {

    formatValues(values) {
        return values?.map(value => {
            return this.formatValue(value);
        })

    }

    formatValue(value) {
        switch (value.value_type) {
            case ValueTypes.Date:
                return this.formatDate(value.value_string);
            case ValueTypes.WikipediaText:
                return this.formatWikiText(value.value_string);
            case ValueTypes.HTML:
                return this.viewAsHTML(value.value_string);
            default:
                return <Typography key={value.value_string + value.date}>{value.value_string.split('\n').map(item => {
                    return <span key={item}>{item}<br/></span>
                })} {value.date}</Typography>;
        }
    }

    formatDate(dateString) {
        return <Typography key={dateString}>{new Date(dateString).toDateString()}</Typography>;
    }

    formatWikiText(textString) {
        return textString.split('\n').map((item, i) => {
            if ((item.match(/=/g) || []).length === 4) {
                return <Typography variant="h5" component="h5" key={i}>{item.replace(/=/g, '')}</Typography>;
            } else if ((item.match(/=/g) || []).length === 6) {
                return <Typography variant="h6" component="h6" key={i}>{item.replace(/=/g, '')}</Typography>;
            } else {
                return <Typography component="p" className={this.props.classes.paragraph}
                                   key={i}>{item.replace(/=/g, '')}</Typography>
            }
        });
    }

    viewAsHTML(htmlString) {
        return <Typography key={"html"} dangerouslySetInnerHTML={{__html: htmlString}}/>
    }

    render() {
        const {content, key} = this.props;
        if (content) {
            return (
                <div className={"mainContent"} key={key}>
                    {this.formatValues(content)}
                </div>
            );
        }
        return (<Typography component="p" style={{textAlign: 'center'}}>
            <Facebook/>
        </Typography>)
    }
}

export default withStyles(styles)(FormattedContentViewer);
