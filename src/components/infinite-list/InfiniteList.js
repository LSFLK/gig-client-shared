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
            result: null,
            nextPage: 1,
            listEnded: false,
        };

        this.loadResults = this.loadResults.bind(this);
    }

    async loadResults() {
        const {result, nextPage} = this.state;

        this.setState({isLoading: true});

        const data = await this.props.getResults(nextPage);
        if (data === null && nextPage === 1) {
            this.setState({result: [], nextPage: 1});
        }
        else if (data === null && nextPage !== 1) {
            this.setState({listEnded: true});
        }
        else if (data && nextPage === 1) {
            this.setState({result: data, nextPage: 2, listEnded: false});
        } else {
            this.setState({result: [...result, ...data], nextPage: nextPage + 1});
        }
        this.setState({isLoading: false});
    }

    componentDidMount() {
        this.loadResults().then(() => console.log("initial results loaded"));
    }


    componentDidUpdate(prevProps) {
        const {getResults}=this.props;
        if (getResults !== prevProps.getResults) {
            this.loadResults().then(() => console.log("initial results loaded"));
        }
    }

    render() {
        const {list} = this.props;
        const {isLoading, result, listEnded} = this.state;
        return (
            <div>
                {list(result)}
                {Array.isArray(result) &&
                <div style={{textAlign: 'center'}}>
                    {isLoading &&
                    <BeatLoader
                        sizeUnit={"px"}
                        size={14}
                        color={'#36D7B7'}
                        loading={this.props.loading}
                    />}
                    {result?.length > 0 && !isLoading && !listEnded &&
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
