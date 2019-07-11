import React, { CSSProperties } from 'react';
import './styles.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withLocalize, LocalizeContextProps } from 'react-localize-redux';
import { setLocale } from '../../reducers/locale-action';
import LangItem from './lang-item';

interface TProps extends LocalizeContextProps {
    setLocale?: (lang: string) => void;
}

interface State {
    containerOpened?: boolean;
}

class LangBtn extends React.Component<TProps, State> {
    state = {
        containerOpened: false
    };

    langClickHandler = (lang: string) => {
        this.props.setActiveLanguage(lang);
        this.props.setLocale(lang);
        this.setState({
            containerOpened: false
        });
    };
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    handleClickOutside = (event: Event) => {
        (event.target as Element).id !== 'ignoreMouseClick' &&
            this.setState({
                containerOpened: false
            });
    };

    render() {
        const { languages, activeLanguage } = this.props;
        const { containerOpened }  = this.state;
        const containerOpenedWidth: CSSProperties = {
            width: `${Object.keys(languages).length * 40}px`
        };
        return (
            <div
                id='ignoreMouseClick'
                className={
                    containerOpened
                        ? 'lang-btn-container opened'
                        : 'lang-btn-container'
                }
                style={containerOpened ? containerOpenedWidth : {}}
                onClick={() => {
                    !containerOpened &&
                        this.setState({
                            containerOpened: true
                        });
                }}
            >
                {containerOpened ? (
                    languages.map((item: any) => {
                        return (
                            <LangItem
                                key={item.code}
                                handler={() => {
                                    this.langClickHandler(item.code);
                                }}
                                lang={item.code}
                            />
                        );
                    })
                ) : (
                    <div id='ignoreMouseClick' className={'lang-btn'}>
                        {activeLanguage.code}
                    </div>
                )}
            </div>
        );
    }
}
const mapStateToProps = (state: any): any => ({});

const mapDispatchToProps = (dispatch: any): any =>
    bindActionCreators(
        {
            setLocale
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withLocalize(LangBtn));
