import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App(props) {
	console.log(process.env.cool);
	return <div>Helloh jk cool jj</div>;
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
	// <Hello compiler="TypeScript" framework="React" />,
	// document.getElementById("root")
);
