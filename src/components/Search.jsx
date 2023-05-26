import React, { useState } from 'react';

const Search = () => {
	const [username, setUsername] = useState('');
	const [user, setUser] = useState(null);
	const [err, setErr] = useState(false);

	return (
		<div className='search'>
			<div className='searchForm'>
				<input type='text' placeholder='Find a user' />
			</div>
			<div className='userChat'>
				<img
					src='https://media.istockphoto.com/id/824860820/es/foto/macaco-barbary.jpg?b=1&s=612x612&w=0&k=20&c=PugrFgo9bzgqJBLCqm-0ZPRmXeA5tA0RbY2iAEGVzOU='
					alt=''
				/>
				<div className='userChatInfo'>
					<span>Jane</span>
				</div>
			</div>
		</div>
	);
};

export default Search;
