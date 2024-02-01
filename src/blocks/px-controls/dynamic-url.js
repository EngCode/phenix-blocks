//===> Get Dynamic URL Suggestions <====//
const SuggestionsUrl = (props) => (
    <ul className="fluid reset-list bg-white bx-shadow-dp-1 border-1 border-solid border-alpha-10 z-index-dropdown position-ab pos-start-0 pos-after-y">
        {props.suggestions.map((suggestion, index) => {
            return (<li key={`link-sug-key-${index}`} className="pdx-15 pdy-5 fs-12 divider-b mouse-pointer" onClick={() => props.handleSuggestionClick(suggestion)}>
                <strong>{suggestion.title}</strong>
                <span className='display-block fs-10 color-primary tx-nowrap'>{suggestion.url}</span>
            </li>)
        })}
    </ul>
);


export default SuggestionsUrl;