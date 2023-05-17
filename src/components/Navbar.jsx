import React from 'react';

const Navbar = () => {
	return (
		<div className='navbar'>
			<span className='logo'>React Chat</span>
			<div className='user'>
				<img
					src='https://media.istockphoto.com/id/824860820/es/foto/macaco-barbary.jpg?b=1&s=612x612&w=0&k=20&c=PugrFgo9bzgqJBLCqm-0ZPRmXeA5tA0RbY2iAEGVzOU='
					alt=''
				/>
				<span>Beto</span>
				<button>LogOut</button>
			</div>
		</div>
	);
};

export default Navbar;
