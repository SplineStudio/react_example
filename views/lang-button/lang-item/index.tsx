import React from 'react';
import './styles.scss';

type TProps = {
    lang: String;
    handler(): void;
};

const LangItem: React.FC<TProps> = ({ lang, handler }) => (
    <div id='ignoreMouseClick' className={'lang-btn'} onClick={handler}>
        {lang}
    </div>
);

export default LangItem;
