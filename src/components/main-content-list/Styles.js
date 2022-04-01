const Styles = _theme => ({
            appBar: {
                backgroundColor: '#282c34',
                padding: "8px",
            },
            headerColumn: {
                paddingTop: "4px"
            },
            loaderColumn: {
                paddingTop: "12px"
            },
            container: {
                backgroundColor: '#eeeeee',
                padding: "16px",
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                minHeight: '100vh'
            },
            footer: {
                backgroundColor: '#eeeeee',
                paddingTop: "8px",
                paddingBottom: "16px",
            },
            paper: {
                margin: "16px",
                padding: '20px',
                textAlign: 'left',
            },
            profilePaper: {
                margin: "16px",
                padding: "16px",
                textAlign: 'left',
                boxShadow: '0px 3px 6px #00000029',
                borderRadius: 16,
                minHeight: '100vh',
            },
            headerText: {
                color: '#000000DE',
                marginLeft: "16px",
                fontSize: '18px',
            },
            trendingContainer: {
                margin: 10,
                padding: "16px",
                textAlign: 'left',
                backgroundColor: '#ddd'
            },
            trendingListContainer: {
                width: '100%',
            },
            listContainer: {
                width: '100%',
            },
            inline: {
                display: 'inline',
            },
            link: {
                paddingRight: "4px",
                textDecoration: 'none',
            },
            collapsible: {
                maxHeight: "300px",
                overflow: "hidden",
            },
            itemLink: {
                display: 'inline',
                textDecoration: 'none',
            },
            search: {
                position: 'relative',
                borderRadius: '20px',
                backgroundColor: 'white',
                '&:hover': {
                    backgroundColor: 'white',
                },
                marginRight: "16px",
                marginLeft: 0,
                width: '100%',
            },
            searchIcon: {
                width: "73px",
                height: '100%',
                position: 'absolute',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            bigAvatar: {
                margin: 10,
                width: 100,
                height: 100,
            },
            searchAvatar: {
                height: 210,
                width: '100%',
                float: 'right',
                objectFit: 'contain',
                borderRadius: 16,
            },
            searchAvatarVertical: {
                height: 140,
                width: '100%',
                float: 'center',
                objectFit: 'cover',
                borderRadius: 16,
            },
            profileAvatar: {
                height: 180,
                width: '100%',
                float: 'right',
                objectFit: 'cover',
                borderRadius: 16,
            },
            mainContentItemTitle: {
                fontSize: 18,
                color: '#000000DE',
                marginBottom: "8px",
            },
            trendingItemTitle: {
                fontSize: 16,
                color: '#000000DE',
            },
            leftContentColumn: {
                width: '100%',
                textAlign: 'left',
                position: 'fixed',
                top: '70px',
                left: '0',
                bottom: '0',
                overflow: 'auto'
            },
            rightContentColumn: {
                width: '100%',
                textAlign: 'left',
                position: 'fixed',
                top: '70px',
                right: '0',
                bottom: '0',
                overflow: 'auto'
            },
            mainContentColumn: {
                textAlign: 'left',
            },
        }
    )
;

export default Styles;
