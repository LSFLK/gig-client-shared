import React, {Component} from "react";
import Typography from '@mui/material/Typography';
import {ValueTypes} from '../../constants/ValueTypes';
import {Facebook} from 'react-content-loader';
import {highlightText} from "../../functions/index";

class FormattedContentViewer extends Component {

    formatValues(values) {
        return values?.map(value => {
            return this.formatValue(value);
        })

    }

    formatValue(value) {
        const {highlightTags, entityRoute} = this.props;
        let highlightedValue = highlightText(value.value_string, entityRoute, highlightTags);
        switch (value.value_type) {
            case ValueTypes.Date:
                return this.formatDate(value.value_string);
            case ValueTypes.WikipediaText:
                return this.formatWikiText(highlightedValue);
            case ValueTypes.HTML:
                return this.viewAsHTML(highlightedValue);
            default:
                return <Typography key={value.value_type + value.date}>{highlightedValue.split('\n').map(item, index => {
                    return <span key={"span-"+index+item} dangerouslySetInnerHTML={{__html: item + '<br/>'}}/>
                })}</Typography>;
        }
    }

    formatDate(dateString) {
        const {dateFormatter} = this.props;
        return <Typography
            key={dateString}>{dateFormatter ? dateFormatter(dateString) : new Date(dateString).toLocaleString()}</Typography>;
    }

    formatWikiText(textString) {
        return textString.split('\n').map((item, i) => {
            if ((item.match(/=/g) || []).length === 4) {
                return <Typography variant="h5" component="h5" key={i}>{item.replace(/=/g, '')}</Typography>;
            } else if ((item.match(/=/g) || []).length === 6) {
                return <Typography variant="h6" component="h6" key={i}>{item.replace(/=/g, '')}</Typography>;
            } else {
                return <Typography component="p" key={i}>{item.replace(/=/g, '')}</Typography>
            }
        });
    }

    viewAsHTML(htmlString) {
        return <Typography key={"html"} dangerouslySetInnerHTML={{__html: htmlString}}/>
    }

    render() {
        const {content, childKey} = this.props;
        if (content && Array.isArray(content)) {
            return (
                <div className={"mainContent"} key={childKey+'child'}>
                    {this.formatValues(content)}
                </div>
            );
        } else if (content) {
            return (
                <div className={"mainContent"} key={childKey+'child'}>
                    {this.formatValue(content)}
                </div>
            );
        }
        return (<Typography component="p" style={{textAlign: 'center'}}>
            <Facebook/>
        </Typography>)
    }
}

export default (FormattedContentViewer);
