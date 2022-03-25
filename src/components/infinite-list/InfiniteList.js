import React, {Component} from "react";
import {Button} from "@mui/material";
import BeatLoader from "react-spinners/BeatLoader";
import downArrow from "./resources/down.png"
import Tooltip from '@mui/material/Tooltip';

class InfiniteList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };

        this.loadResults = this.loadResults.bind(this);
    }

    async loadResults() {
        this.setState({isLoading: true});
        const results = await this.props.getResultItems();
        if (!results) {
            this.setState({
                isLoading: false,
            });
        } else {
            this.setState({isLoading: false});
        }
    }

    render() {
        const {listItems, list} = this.props;
        const {isLoading} = this.state;

        return (
            <div>
                {list}
                {Array.isArray(listItems) &&
                <div style={{textAlign: 'center'}}>
                    {isLoading &&
                    <BeatLoader
                        sizeUnit={"px"}
                        size={14}
                        color={'#36D7B7'}
                        loading={this.props.loading}
                    />}
                    {listItems?.length > 0 && !isLoading &&
                    <Tooltip title={'view more'} aria-label="add">
                        <Button style={{width: "100%"}} onClick={() => this.loadResults()}><img alt={"view more"}
                                                                                                width={"15px"}
                                                                                                src={downArrow}/></Button>
                    </Tooltip>}
                </div>}
            </div>
        )
    }
}

export default InfiniteList;
