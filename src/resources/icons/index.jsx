export const IconWrapper = ({ children, className = "" }) => {
	return <span className={`${className} flex items-center justify-center`}>{children}</span>;
};

export const DashboardIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
		<path
			fill="currentColor"
			d="m326.1 231.9l-47.5 75.5a31 31 0 0 1-7 7a30.11 30.11 0 0 1-35-49l75.5-47.5a10.23 10.23 0 0 1 11.7 0a10.06 10.06 0 0 1 2.3 14"></path>
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={40}
			d="M256 64C132.3 64 32 164.2 32 287.9a223.18 223.18 0 0 0 56.3 148.5c1.1 1.2 2.1 2.4 3.2 3.5a25.19 25.19 0 0 0 37.1-.1a173.13 173.13 0 0 1 254.8 0a25.19 25.19 0 0 0 37.1.1l3.2-3.5A223.18 223.18 0 0 0 480 287.9C480 164.2 379.7 64 256 64"></path>
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeMiterlimit={10}
			strokeWidth={50}
			d="M256 128v32m160 128h-32m-256 0H96m69.49-90.51l-22.63-22.63m203.65 22.63l22.63-22.63"></path>
	</svg>
);

export const BellIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M12 1a2 2 0 0 0-1.98 2.284A7 7 0 0 0 5 10v8H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1v-8a7 7 0 0 0-5.02-6.716Q14 3.144 14 3a2 2 0 0 0-2-2m2 21a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1"
			clipRule="evenodd"></path>
	</svg>
);

export const UserPendingIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2.1}
			d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4q.523.002 1.009.128M16 19h6"></path>
	</svg>
);

export const UserVerifiedIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2.1}
			d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4m1 4l2 2l4-4"></path>
	</svg>
);

export const UserBlockedIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.1}>
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
			<circle cx={9} cy={7} r={4}></circle>
			<path d="m17 8l5 5m0-5l-5 5"></path>
		</g>
	</svg>
);

export const TotalUsersIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M12 1.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"
			clipRule="evenodd"
			strokeWidth={0.4}
			stroke="currentColor"></path>
		<path
			fill="currentColor"
			d="M18 3.25a.75.75 0 0 0 0 1.5c1.377 0 2.25.906 2.25 1.75S19.377 8.25 18 8.25a.75.75 0 0 0 0 1.5c1.937 0 3.75-1.333 3.75-3.25S19.937 3.25 18 3.25M6.75 4A.75.75 0 0 0 6 3.25c-1.937 0-3.75 1.333-3.75 3.25S4.063 9.75 6 9.75a.75.75 0 0 0 0-1.5c-1.376 0-2.25-.906-2.25-1.75S4.624 4.75 6 4.75A.75.75 0 0 0 6.75 4"
			strokeWidth={0.4}
			stroke="currentColor"></path>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M12 12.25c-1.784 0-3.434.48-4.659 1.297c-1.22.814-2.091 2.02-2.091 3.453s.871 2.64 2.091 3.453c1.225.816 2.875 1.297 4.659 1.297s3.434-.48 4.659-1.297c1.22-.814 2.091-2.02 2.091-3.453s-.872-2.64-2.091-3.453c-1.225-.816-2.875-1.297-4.659-1.297M6.75 17c0-.776.472-1.57 1.423-2.204c.947-.631 2.298-1.046 3.827-1.046c1.53 0 2.88.415 3.827 1.046c.951.634 1.423 1.428 1.423 2.204s-.472 1.57-1.423 2.204c-.947.631-2.298 1.046-3.827 1.046c-1.53 0-2.88-.415-3.827-1.046C7.222 18.57 6.75 17.776 6.75 17"
			clipRule="evenodd"
			strokeWidth={0.4}
			stroke="currentColor"></path>
		<path
			fill="currentColor"
			d="M19.267 13.84a.75.75 0 0 1 .894-.573c.961.211 1.828.592 2.472 1.119c.643.526 1.117 1.25 1.117 2.114c0 .865-.474 1.588-1.117 2.114c-.644.527-1.51.908-2.472 1.119a.75.75 0 0 1-.322-1.466c.793-.173 1.426-.472 1.844-.814s.567-.677.567-.953s-.149-.61-.567-.953s-1.051-.64-1.844-.814a.75.75 0 0 1-.572-.894M3.84 13.267a.75.75 0 1 1 .32 1.466c-.792.173-1.425.472-1.843.814s-.567.677-.567.953s.149.61.567.953s1.051.64 1.844.814a.75.75 0 0 1-.322 1.466c-.962-.211-1.828-.592-2.472-1.119C.724 18.088.25 17.364.25 16.5c0-.865.474-1.588 1.117-2.114c.644-.527 1.51-.908 2.472-1.119"
			strokeWidth={0.4}
			stroke="currentColor"></path>
	</svg>
);

export const CameraIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3}>
			<path d="M12 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1a2 2 0 0 0 2-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5"></path>
			<path d="M12 16a3 3 0 1 0 0-6a3 3 0 0 0 0 6m7 6v-6m3 3l-3-3l-3 3"></path>
		</g>
	</svg>
);

export const ChangePasswordIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16"
			opacity={0.5}
			strokeWidth={0.6}
			stroke="currentColor"></path>
		<path
			fill="currentColor"
			d="M8 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004c.567.005 1.064.018 1.5.05V8a6.75 6.75 0 0 0-13.5 0v2.055a24 24 0 0 1 1.5-.051z"
			strokeWidth={0.6}
			stroke="currentColor"></path>
	</svg>
);

export const ChangeEmailIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<mask id="lineMdEmailPlusTwotone0">
			<g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3}>
				<path
					strokeDasharray={64}
					strokeDashoffset={64}
					d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z">
					<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
				</path>
				<path strokeDasharray={24} strokeDashoffset={24} d="M3 6.5l9 5.5l9 -5.5">
					<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></animate>
				</path>
				<path fill="#fff" fillOpacity={0} stroke="none" d="M12 11l-8 -5h16l-8 5Z">
					<animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.15s" values="0;0.3"></animate>
				</path>
				<path fill="#000" fillOpacity={0} stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z">
					<set fill="freeze" attributeName="fill-opacity" begin="0.8s" to={1}></set>
				</path>
				<path strokeDasharray={8} strokeDashoffset={8} d="M16 19h6">
					<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></animate>
				</path>
				<path strokeDasharray={8} strokeDashoffset={8} d="M19 16v6">
					<animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0"></animate>
				</path>
			</g>
		</mask>
		<rect width="1em" height="1em" fill="currentColor" mask="url(#lineMdEmailPlusTwotone0)"></rect>
	</svg>
);

export const EmailIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none">
			<path fill="currentColor" d="m3 5l7.586 7.586a2 2 0 0 0 2.828 0L21 5v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" opacity={0.16}></path>
			<path
				fill="currentColor"
				d="M3 5V4a1 1 0 0 0-1 1zm18 0h1a1 1 0 0 0-1-1zM3 6h18V4H3zm17-1v12h2V5zm-1 13H5v2h14zM4 17V5H2v12zm1 1a1 1 0 0 1-1-1H2a3 3 0 0 0 3 3zm15-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3z"></path>
			<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3 5l9 9l9-9"></path>
		</g>
	</svg>
);

export const ChangePhoneIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
		<g fill="currentColor" strokeWidth={2} stroke="currentColor">
			<path
				d="M223.94 174.08A48.33 48.33 0 0 1 176 216A136 136 0 0 1 40 80a48.33 48.33 0 0 1 41.92-47.94a8 8 0 0 1 8.3 4.8l21.13 47.2a8 8 0 0 1-.66 7.53L89.32 117a7.93 7.93 0 0 0-.54 7.81c8.27 16.93 25.77 34.22 42.75 42.41a7.92 7.92 0 0 0 7.83-.59l25-21.3a8 8 0 0 1 7.59-.69l47.16 21.13a8 8 0 0 1 4.83 8.31"
				opacity={0.2}></path>
			<path d="m222.37 158.46l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8 8 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62M176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40a.6.6 0 0 0 0 .12l21 47l-20.67 24.74a6 6 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a8 8 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208"></path>
		</g>
	</svg>
);

export const NotificationIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none">
			<path fill="currentColor" d="M6 10v9h12v-9a6 6 0 0 0-12 0" opacity={0.16}></path>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2.3}
				d="M6 19v-9a6 6 0 0 1 6-6v0a6 6 0 0 1 6 6v9M6 19h12M6 19H4m14 0h2m-9 3h2"></path>
			<circle cx={12} cy={3} r={1} stroke="currentColor" strokeWidth={2.3}></circle>
		</g>
	</svg>
);

export const DeactivateUserIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path fill="currentColor" d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8" strokeWidth={0.6} stroke="currentColor"></path>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M16.5 15.75a2.75 2.75 0 0 0-2.383 4.123l3.756-3.756a2.74 2.74 0 0 0-1.373-.367m2.42 1.442l-3.728 3.728a2.75 2.75 0 0 0 3.728-3.728M12.25 18.5a4.25 4.25 0 1 1 8.5 0a4.25 4.25 0 0 1-8.5 0"
			clipRule="evenodd"
			strokeWidth={0.6}
			stroke="currentColor"></path>
		<path
			fill="currentColor"
			d="M17.996 14.521a4.25 4.25 0 0 0-3.979 7.429Q13.107 22 12 22c-8 0-8-2.015-8-4.5S7.582 13 12 13c2.387 0 4.53.588 5.996 1.521"
			opacity={0.4}
			strokeWidth={0.6}
			stroke="currentColor"></path>
	</svg>
);

export const CloseIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M18 6L6 18M6 6l12 12"></path>
	</svg>
);

export const VisibleEyeIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
		<path
			fill="currentColor"
			d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3c7.7-16.2 7.7-35 0-51.5M512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258s279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766m-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176s-78.8-176-176-176m0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112s112 50.1 112 112s-50.1 112-112 112"
			strokeWidth={10.5}
			stroke="currentColor"></path>
	</svg>
);

export const InvisibleEyeIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
		<path
			fill="currentColor"
			d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512C791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5m-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32M149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512m246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512"
			strokeWidth={10.5}
			stroke="currentColor"></path>
		<path
			fill="currentColor"
			d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112"
			strokeWidth={25.5}
			stroke="currentColor"></path>
	</svg>
);

export const LocationIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}>
			<circle cx={12} cy={10} r={3}></circle>
			<path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8"></path>
		</g>
	</svg>
);

export const ExchangeIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M7 21.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m10-10a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m-10 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m10-10a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M3 8a5 5 0 0 1 5-5h3v2H8a3 3 0 0 0-3 3v3H3zm18 5h-2v3a3 3 0 0 1-3 3h-3v2h3a5 5 0 0 0 5-5z"
			strokeWidth={0.1}
			stroke="currentColor"></path>
	</svg>
);

export const CelebrateIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="173" height="164" viewBox="0 0 173 164" fill="none">
		<path
			d="M22.6661 140.833L81.4161 120L43.4995 82.0833L22.6661 140.833ZM170.374 43.5417C169.124 44.7917 167.666 45.4167 165.999 45.4167C164.333 45.4167 162.874 44.7917 161.624 43.5417L160.999 42.9167C159.055 40.9722 156.624 40 153.708 40C150.791 40 148.361 40.9722 146.416 42.9167L104.124 85.2083C102.874 86.4583 101.416 87.0833 99.7495 87.0833C98.0828 87.0833 96.6245 86.4583 95.3745 85.2083C94.1245 83.9583 93.4995 82.5 93.4995 80.8333C93.4995 79.1667 94.1245 77.7083 95.3745 76.4583L137.666 34.1667C142.111 29.7222 147.458 27.5 153.708 27.5C159.958 27.5 165.305 29.7222 169.749 34.1667L170.374 34.7917C171.624 36.0417 172.249 37.5 172.249 39.1667C172.249 40.8333 171.624 42.2917 170.374 43.5417ZM61.6245 18.5417C62.8745 17.2917 64.3328 16.6667 65.9995 16.6667C67.6661 16.6667 69.1245 17.2917 70.3745 18.5417L71.4161 19.5833C75.8606 24.0278 78.0828 29.3056 78.0828 35.4167C78.0828 41.5278 75.8606 46.8056 71.4161 51.25L70.7911 51.875C69.5411 53.125 68.0828 53.75 66.4161 53.75C64.7495 53.75 63.2911 53.125 62.0411 51.875C60.7911 50.625 60.1661 49.1667 60.1661 47.5C60.1661 45.8333 60.7911 44.375 62.0411 43.125L62.6661 42.5C64.6106 40.5556 65.5828 38.1944 65.5828 35.4167C65.5828 32.6389 64.6106 30.2778 62.6661 28.3333L61.6245 27.2917C60.3745 26.0417 59.7495 24.5833 59.7495 22.9167C59.7495 21.25 60.3745 19.7917 61.6245 18.5417ZM95.3745 1.875C96.6245 0.625 98.0828 0 99.7495 0C101.416 0 102.874 0.625 104.124 1.875L113.083 10.8333C117.527 15.2778 119.749 20.625 119.749 26.875C119.749 33.125 117.527 38.4722 113.083 42.9167L87.4578 68.5417C86.2078 69.7917 84.7495 70.4167 83.0828 70.4167C81.4161 70.4167 79.9578 69.7917 78.7078 68.5417C77.4578 67.2917 76.8328 65.8333 76.8328 64.1667C76.8328 62.5 77.4578 61.0417 78.7078 59.7917L104.333 34.1667C106.277 32.2222 107.249 29.7917 107.249 26.875C107.249 23.9583 106.277 21.5278 104.333 19.5833L95.3745 10.625C94.1245 9.375 93.4995 7.91667 93.4995 6.25C93.4995 4.58333 94.1245 3.125 95.3745 1.875ZM162.041 101.875C160.791 103.125 159.333 103.75 157.666 103.75C155.999 103.75 154.541 103.125 153.291 101.875L144.333 92.9167C142.388 90.9722 139.958 90 137.041 90C134.124 90 131.694 90.9722 129.749 92.9167L120.791 101.875C119.541 103.125 118.083 103.75 116.416 103.75C114.749 103.75 113.291 103.125 112.041 101.875C110.791 100.625 110.166 99.1667 110.166 97.5C110.166 95.8333 110.791 94.375 112.041 93.125L120.999 84.1667C125.444 79.7222 130.791 77.5 137.041 77.5C143.291 77.5 148.638 79.7222 153.083 84.1667L162.041 93.125C163.291 94.375 163.916 95.8333 163.916 97.5C163.916 99.1667 163.291 100.625 162.041 101.875ZM0.999464 151.667L32.4578 64.1667C33.1522 62.3611 34.2286 60.9722 35.687 60C37.1453 59.0278 38.7078 58.5417 40.3745 58.5417C41.4856 58.5417 42.5272 58.75 43.4995 59.1667C44.4717 59.5833 45.3745 60.2083 46.2078 61.0417L102.458 117.292C103.291 118.125 103.916 119.028 104.333 120C104.749 120.972 104.958 122.014 104.958 123.125C104.958 124.792 104.472 126.354 103.499 127.813C102.527 129.271 101.138 130.347 99.3328 131.042L11.8328 162.5C10.1661 163.194 8.56891 163.299 7.04113 162.813C5.51335 162.326 4.19391 161.528 3.0828 160.417C1.97169 159.306 1.17307 157.986 0.686964 156.458C0.200853 154.931 0.305019 153.333 0.999464 151.667Z"
			fill="#00801A"
		/>
	</svg>
);

export const UserProfileCircleIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="currentColor" fillRule="evenodd" clipRule="evenodd" strokeWidth={0.01} stroke="currentColor">
			<path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></path>
			<path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21"></path>
		</g>
	</svg>
);

export const LogoutIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"
			strokeWidth={0.4}
			stroke="currentColor"></path>
	</svg>
);

export const UtilitiesIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
		<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4}>
			<path d="m24 27l-10-6l-10 6v12l10 6l10-6zm20 0l-10-6l-10 6v12l10 6l10-6z"></path>
			<path d="M34 9L24 3L14 9v12l10 6l10-6z"></path>
		</g>
	</svg>
);

export const GatewayIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="none"
			stroke="currentColor"
			strokeWidth={1.8}
			d="M3 8.71c0-1.474 0-2.21.393-2.64a1.5 1.5 0 0 1 .497-.36c.532-.236 1.231-.003 2.629.463c1.067.356 1.6.534 2.14.515a3 3 0 0 0 .588-.078c.525-.125.993-.437 1.929-1.06l1.382-.922c1.2-.8 1.799-1.2 2.487-1.291c.688-.093 1.372.135 2.739.591l1.165.388c.99.33 1.485.495 1.768.888S21 6.12 21 7.162v8.129c0 1.473 0 2.21-.393 2.64a1.5 1.5 0 0 1-.497.358c-.532.237-1.231.004-2.629-.462c-1.067-.356-1.6-.534-2.14-.515a3 3 0 0 0-.588.078c-.525.125-.993.437-1.929 1.06l-1.382.922c-1.2.8-1.799 1.2-2.487 1.291c-.688.093-1.372-.135-2.739-.591l-1.165-.388c-.99-.33-1.485-.495-1.768-.888S3 17.88 3 16.838zm6-2.071V20.5M15 3v14"></path>
	</svg>
);

export const DefaultProfileImageIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M256 42.667A213.333 213.333 0 0 1 469.334 256c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m21.334 234.667h-42.667c-52.815 0-98.158 31.987-117.715 77.648c30.944 43.391 81.692 71.685 139.048 71.685s108.104-28.294 139.049-71.688c-19.557-45.658-64.9-77.645-117.715-77.645M256 106.667c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.654 64-64s-28.653-64-64-64"
			strokeWidth={13}
			stroke="currentColor"></path>
	</svg>
);

export const KYCIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" fillRule="evenodd">
			<path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
			<path
				fill="currentColor"
				d="M13.586 2A2 2 0 0 1 15 2.586L19.414 7A2 2 0 0 1 20 8.414V13h-2v-3h-4.5A1.5 1.5 0 0 1 12 8.5V4H6v16h6v2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm3.73 12.051l3 1A1 1 0 0 1 21 16v1.671a4.346 4.346 0 0 1-3.866 4.32a1.2 1.2 0 0 1-.268 0A4.346 4.346 0 0 1 13 17.671V16a1 1 0 0 1 .684-.949l3-1a1 1 0 0 1 .632 0M17 16.054l-2 .667v.95c0 1.167.855 2.15 2 2.321c1.145-.17 2-1.154 2-2.32v-.951zm-3-11.64V8h3.586z"
				strokeWidth={0.1}
				stroke="currentColor"></path>
		</g>
	</svg>
);

export const GlobeIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M12 1.998c5.524 0 10.002 4.478 10.002 10.002c0 5.523-4.478 10-10.002 10S2 17.523 2 12C1.999 6.476 6.476 1.998 12 1.998M14.94 16.5H9.061c.652 2.415 1.786 4.002 2.94 4.002s2.286-1.588 2.938-4.002m-7.43 0H4.785a8.53 8.53 0 0 0 4.095 3.41c-.522-.82-.953-1.846-1.27-3.015zm11.705 0h-2.722c-.324 1.335-.792 2.5-1.373 3.411a8.53 8.53 0 0 0 3.91-3.127zM7.094 10H3.736l-.005.017A8.5 8.5 0 0 0 3.5 12a8.5 8.5 0 0 0 .544 3h3.173A20 20 0 0 1 7 12c0-.684.032-1.354.095-2.001m8.303 0H8.603a19 19 0 0 0 .135 5h6.524a19 19 0 0 0 .135-5m4.868 0h-3.358c.062.647.095 1.317.095 2a20 20 0 0 1-.218 3h3.173a8.5 8.5 0 0 0 .545-3c0-.689-.082-1.359-.237-2M8.88 4.088l-.023.008A8.53 8.53 0 0 0 4.25 8.5h3.048c.314-1.752.86-3.278 1.583-4.41m3.12-.591l-.117.005C10.62 3.62 9.397 5.621 8.83 8.5h6.342c-.566-2.87-1.783-4.869-3.045-4.995zm3.12.59l.106.175c.67 1.112 1.177 2.572 1.475 4.237h3.048a8.53 8.53 0 0 0-4.339-4.29z"
			strokeWidth={0.1}
			stroke="currentColor"></path>
	</svg>
);

export const SearchIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none">
			<path fill="currentColor" d="M19 11a8 8 0 1 1-16 0a8 8 0 0 1 16 0" opacity={0.16}></path>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"></path>
		</g>
	</svg>
);

export const FilterIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M5 3h14L8.816 13.184a2.7 2.7 0 0 0-.778-1.086c-.228-.198-.547-.377-1.183-.736l-2.913-1.64c-.949-.533-1.423-.8-1.682-1.23C2 8.061 2 7.541 2 6.503v-.69c0-1.326 0-1.99.44-2.402C2.878 3 3.585 3 5 3"
			clipRule="evenodd"></path>
		<path
			fill="currentColor"
			d="M22 6.504v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3L8.815 13.184q.075.193.121.403c.064.285.064.619.064 1.286v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683S15 19.452 15 17.542v-2.67c0-.666 0-1 .063-1.285a2.68 2.68 0 0 1 .9-1.49c.227-.197.545-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988"
			opacity={0.5}></path>
	</svg>
);

export const PlusIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m-6-6h12"></path>
	</svg>
);

export const DownloadIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2.1}
			d="M6 21h12M12 3v14m0 0l5-5m-5 5l-5-5"></path>
	</svg>
);

export const ShareIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeWidth={1.5}>
			<path d="M9 11.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></path>
			<path strokeLinecap="round" d="M14.32 16.802L9 13.29m5.42-6.45L9.1 10.352" opacity={0.5}></path>
			<path d="M19 18.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm0-13a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></path>
		</g>
	</svg>
);

export const TrashIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M3 6.386c0-.484.345-.877.771-.877h2.665c.529-.016.996-.399 1.176-.965l.03-.1l.115-.391c.07-.24.131-.45.217-.637c.338-.739.964-1.252 1.687-1.383c.184-.033.378-.033.6-.033h3.478c.223 0 .417 0 .6.033c.723.131 1.35.644 1.687 1.383c.086.187.147.396.218.637l.114.391l.03.1c.18.566.74.95 1.27.965h2.57c.427 0 .772.393.772.877s-.345.877-.771.877H3.77c-.425 0-.77-.393-.77-.877"></path>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M9.425 11.482c.413-.044.78.273.821.707l.5 5.263c.041.433-.26.82-.671.864c-.412.043-.78-.273-.821-.707l-.5-5.263c-.041-.434.26-.821.671-.864m5.15 0c.412.043.713.43.671.864l-.5 5.263c-.04.434-.408.75-.82.707c-.413-.044-.713-.43-.672-.864l.5-5.264c.041-.433.409-.75.82-.707"
			clipRule="evenodd"></path>
		<path
			fill="currentColor"
			d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.339 1.181-5.245l.267-4.188c.1-1.577.15-2.366-.303-2.865c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5s-.404 1.288-.303 2.865l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886"
			opacity={0.5}></path>
	</svg>
);

export const ViewIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			fillOpacity={0.25}
			d="M20.188 10.934c.388.472.582.707.582 1.066s-.194.594-.582 1.066C18.768 14.79 15.636 18 12 18s-6.768-3.21-8.188-4.934c-.388-.472-.582-.707-.582-1.066s.194-.594.582-1.066C5.232 9.21 8.364 6 12 6s6.768 3.21 8.188 4.934"></path>
		<circle cx={12} cy={12} r={3} fill="currentColor"></circle>
	</svg>
);

export const SendIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<defs>
			<path
				id="letsIconsSendDuotone0"
				fill="currentColor"
				d="m7.692 11.897l1.41.47c.932.31 1.397.466 1.731.8s.49.8.8 1.73l.47 1.41c.784 2.354 1.176 3.53 1.897 3.53c.72 0 1.113-1.176 1.897-3.53l2.838-8.512c.552-1.656.828-2.484.391-2.921s-1.265-.161-2.92.39l-8.515 2.84C5.34 8.887 4.162 9.279 4.162 10s1.177 1.113 3.53 1.897"></path>
		</defs>
		<use href="#letsIconsSendDuotone0" fillOpacity={0.25}></use>
		<use href="#letsIconsSendDuotone0" fillOpacity={0.25}></use>
		<path
			fill="currentColor"
			d="m9.526 13.842l-2.062-.687a1 1 0 0 0-.87.116l-1.09.726a.8.8 0 0 0 .25 1.442l1.955.488a.5.5 0 0 1 .364.364l.488 1.955a.8.8 0 0 0 1.442.25l.726-1.09a1 1 0 0 0 .116-.87l-.687-2.062a1 1 0 0 0-.632-.632"></path>
	</svg>
);

export const UploadFileIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22"
			clipRule="evenodd"
			opacity={0.5}></path>
		<path
			fill="currentColor"
			d="M7.987 12.953a.75.75 0 0 1 1.026 0l2 1.875a.75.75 0 0 1-1.026 1.094l-.737-.69V18.5a.75.75 0 0 1-1.5 0v-3.269l-.737.691a.75.75 0 0 1-1.026-1.094zM11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></path>
	</svg>
);

export const UploadIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M6.5 18v-.09c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.085.637.086 1.416.086 2.267c2.573-.55 4.5-2.812 4.5-5.52c0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z"
			opacity={0.5}></path>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M12 14c-1.886 0-2.828 0-3.414.586S8 16.114 8 18s0 2.828.586 3.414S10.114 22 12 22s2.828 0 3.414-.586S16 19.886 16 18s0-2.828-.586-3.414S13.886 14 12 14m1.805 3.084l-1.334-1.333a.667.667 0 0 0-.942 0l-1.334 1.333a.667.667 0 1 0 .943.943l.195-.195v1.946a.667.667 0 0 0 1.334 0v-1.946l.195.195a.667.667 0 0 0 .943-.943"
			clipRule="evenodd"></path>
	</svg>
);

export const UserAddIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<circle cx={12} cy={6} r={4} fill="currentColor"></circle>
		<path
			fill="currentColor"
			d="M18.095 15.031C17.67 15 17.149 15 16.5 15c-1.65 0-2.475 0-2.987.513C13 16.025 13 16.85 13 18.5c0 1.166 0 1.92.181 2.443Q12.605 21 12 21c-3.866 0-7-1.79-7-4s3.134-4 7-4c2.613 0 4.892.818 6.095 2.031"
			opacity={0.5}></path>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M16.5 22c-1.65 0-2.475 0-2.987-.513C13 20.975 13 20.15 13 18.5s0-2.475.513-2.987C14.025 15 14.85 15 16.5 15s2.475 0 2.987.513C20 16.025 20 16.85 20 18.5s0 2.475-.513 2.987C18.975 22 18.15 22 16.5 22m.583-5.056a.583.583 0 1 0-1.166 0v.973h-.973a.583.583 0 1 0 0 1.166h.973v.973a.583.583 0 1 0 1.166 0v-.973h.973a.583.583 0 1 0 0-1.166h-.973z"
			clipRule="evenodd"></path>
	</svg>
);

export const ChevronRightIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12">
		<path
			fill="currentColor"
			d="M4.646 2.146a.5.5 0 0 0 0 .708L7.793 6L4.646 9.146a.5.5 0 1 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"></path>
	</svg>
);

export const UsersIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2.1}
			d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-17.87a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85"></path>
	</svg>
);

export const UserIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" fillRule="evenodd">
			<path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
			<path
				fill="currentColor"
				d="M16 14a5 5 0 0 1 4.995 4.783L21 19v2a1 1 0 0 1-1.993.117L19 21v-2a3 3 0 0 0-2.824-2.995L16 16H8a3 3 0 0 0-2.995 2.824L5 19v2a1 1 0 0 1-1.993.117L3 21v-2a5 5 0 0 1 4.783-4.995L8 14zM12 2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></path>
		</g>
	</svg>
);

export const EditIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006z"
			strokeWidth={0.1}
			stroke="currentColor"></path>
		<path
			fill="currentColor"
			d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2"
			strokeWidth={0.1}
			stroke="currentColor"></path>
	</svg>
);

export const WriteIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M12.238 3.64a1.854 1.854 0 0 0-1.629-1.628l-.8.8a3.37 3.37 0 0 1 1.63 1.628zM4.74 7.88l3.87-3.868a1.854 1.854 0 0 1 1.628 1.629L6.369 9.51a1.5 1.5 0 0 1-.814.418l-1.48.247l.247-1.48a1.5 1.5 0 0 1 .418-.814M9.72.78l-2 2l-4.04 4.04a3 3 0 0 0-.838 1.628L2.48 10.62a1 1 0 0 0 1.151 1.15l2.17-.36a3 3 0 0 0 1.629-.839l4.04-4.04l2-2c.18-.18.28-.423.28-.677A3.353 3.353 0 0 0 10.397.5c-.254 0-.498.1-.678.28M2.75 13a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z"
			clipRule="evenodd"
			strokeWidth={0.08}
			stroke="currentColor"></path>
	</svg>
);

export const ExportFileIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
			<path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
			<path d="M11.5 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v5m-5 6h7m-3-3l3 3l-3 3"></path>
		</g>
	</svg>
);

export const ChevronLeftIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M14.707 5.293a1 1 0 0 1 0 1.414L9.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0"
			strokeWidth={0.1}
			stroke="currentColor"></path>
	</svg>
);

export const BusinessIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M21 11.11V7a2 2 0 0 0-.58-1.41A1.87 1.87 0 0 0 19 5h-4V3a1.9 1.9 0 0 0-.58-1.42A1.9 1.9 0 0 0 13 1H9a1.9 1.9 0 0 0-1.42.58A1.9 1.9 0 0 0 7 3v2H3a1.87 1.87 0 0 0-1.42.59A2 2 0 0 0 1 7v11a2 2 0 0 0 .58 1.41A1.87 1.87 0 0 0 3 20h7.26A7 7 0 1 0 21 11.11M9 3h4v2H9M3 18V7h16v2.68A6.84 6.84 0 0 0 16 9a7 7 0 0 0-7 7a7 7 0 0 0 .29 2M19 20a5 5 0 0 1-6 0a4.94 4.94 0 0 1-2-4a5 5 0 0 1 5-5a4.94 4.94 0 0 1 3 1a5 5 0 0 1 0 8m-4-7h1.5v2.82l2.44 1.41l-.75 1.3L15 16.69z"></path>
	</svg>
);

export const EmptyBoxIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9z"
			className="duoicon-secondary-layer"
			opacity={0.3}
			strokeWidth={0.1}
			stroke="currentColor"></path>
		<path
			fill="currentColor"
			d="M20 3a2 2 0 0 1 2 2v3H2V5a2 2 0 0 1 2-2zm-6 10h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2"
			className="duoicon-primary-layer"
			strokeWidth={0.1}
			stroke="currentColor"></path>
	</svg>
);

export const EmptyListIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
		<g fill="none" stroke="currentColor" strokeWidth={1}>
			<circle cx={4} cy={3.5} r={2}></circle>
			<path strokeLinecap="round" d="M7.5 10.5c-.2-1.7-1.7-3-3.5-3S.7 8.8.5 10.5m7.5-7h3.5m-3 3h3m-1.5 3h1.5"></path>
		</g>
	</svg>
);

export const ChevronDownIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m17 10l-5 5l-5-5"></path>
	</svg>
);

export const ChevronUpIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.1} d="m17 14l-5-5l-5 5"></path>
	</svg>
);

export const CheckIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47"></path>
	</svg>
);

export const BankIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path fill="currentColor" d="M6.5 10h-2v7h2zm6 0h-2v7h2zm8.5 9H2v2h19zm-2.5-9h-2v7h2zm-7-6.74L16.71 6H6.29zm0-2.26L2 6v2h19V6z"></path>
	</svg>
);

export const RateIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M18 8h-1V6c0-2.8-2.2-5-5-5S7 3.2 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2M9 6c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9zm.5 5c.8 0 1.5.7 1.5 1.5S10.3 14 9.5 14S8 13.3 8 12.5S8.7 11 9.5 11m5 8c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m-5.3.2l-1.4-1.4l7.1-7.1l1.4 1.4z"
			strokeWidth={0.4}
			stroke="currentColor"></path>
	</svg>
);

export const ThreeDotsIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0-14a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></path>
	</svg>
);

export const PinIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48l1.3-.75l-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7L4 8.47L3.15 7l-1.3.75l.85 1.47H1v1.5h1.7l-.85 1.48zm6.7-.75l1.3.75l.85-1.48l.85 1.48l1.3-.75l-.85-1.48H15v-1.5h-1.7l.85-1.47l-1.3-.75L12 8.47L11.15 7l-1.3.75l.85 1.47H9v1.5h1.7zM23 9.22h-1.7l.85-1.47l-1.3-.75L20 8.47L19.15 7l-1.3.75l.85 1.47H17v1.5h1.7l-.85 1.48l1.3.75l.85-1.48l.85 1.48l1.3-.75l-.85-1.48H23z"
			strokeWidth={0.4}
			stroke="currentColor"></path>
	</svg>
);

export const CheckCircleIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1m4.768 9.14a1 1 0 1 0-1.536-1.28l-4.3 5.159l-2.225-2.226a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.475-.067z"
			clipRule="evenodd"></path>
	</svg>
);

export const CheckShieldIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082M15.06 10.5a.75.75 0 0 0-1.12-.999l-3.011 3.374l-.87-.974a.75.75 0 0 0-1.118 1l1.428 1.6a.75.75 0 0 0 1.119 0z"
			clipRule="evenodd"></path>
	</svg>
);

export const DoubleChevronRightIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m13 8l4 4l-4 4M7 8l4 4l-4 4"></path>
	</svg>
);

export const ArrowUpIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="m13 5.586l-4.707 4.707a.999.999 0 1 0 1.414 1.414L12 9.414V17a1 1 0 1 0 2 0V9.414l2.293 2.293a.997.997 0 0 0 1.414 0a1 1 0 0 0 0-1.414z"
			strokeWidth={0.4}
			stroke="currentColor"></path>
	</svg>
);

export const MenuIconDouble = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15h18M3 9h18"></path>
	</svg>
);

export const ExportIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M13 5.828V17h-2V5.828L7.757 9.071L6.343 7.657L12 2l5.657 5.657l-1.414 1.414zM4 16h2v4h12v-4h2v4c0 1.1-.9 2-2 2H6c-1.1 0-2-.963-2-2z"
			strokeWidth={0.4}
			stroke="currentColor"></path>
	</svg>
);

export const OutMoneyIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} color="currentColor">
			<path d="M14 2.2q-.97-.198-2-.2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10q-.002-1.03-.2-2"></path>
			<path d="M12 9c-1.105 0-2 .672-2 1.5s.895 1.5 2 1.5s2 .672 2 1.5s-.895 1.5-2 1.5m0-6c.87 0 1.612.417 1.886 1M12 9V8m0 7c-.87 0-1.612-.417-1.886-1M12 15v1m4.998-8.998l4.176-4.178m.824 3.656l-.118-3.09c0-.729-.435-1.183-1.228-1.24l-3.124-.147"></path>
		</g>
	</svg>
);

export const FundWalletIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} color="currentColor">
			<path d="M15 15a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></path>
			<path d="M3 12V6c2.105.621 6.576 1.427 12.004 1.803c2.921.202 4.382.303 5.189 1.174c.807.87.807 2.273.807 5.078v2.013c0 2.889 0 4.333-.984 5.232c-.983.899-2.324.768-5.005.506a62 62 0 0 1-2.011-.23"></path>
			<path d="M17.626 8c.377-1.423.72-4.012-.299-5.297c-.645-.815-1.605-.736-2.545-.654c-4.944.435-8.437 1.318-10.389 1.918C3.553 4.225 3 5.045 3 5.96M11 18H7m0 0H3m4 0v4m0-4v-4"></path>
		</g>
	</svg>
);

export const SwapIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M21 7H3m15 3l3-3l-3-3M6 20l-3-3l3-3m-3 3h18"></path>
	</svg>
);

export const NotePadIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}>
			<path d="M8 2v4m4-4v4m4-4v4"></path>
			<rect width={16} height={18} x={4} y={4} rx={2}></rect>
			<path d="M8 10h6m-6 4h8m-8 4h5"></path>
		</g>
	</svg>
);

export const PaymentIcon = () => (
	<svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
		<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.98}>
			<path d="M7 11.5v2m2.5-3v2m-5-2v2M2.75 4.75a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m8.5.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5m-3.186-.861a.83.83 0 0 0-.786-.556h-.645a.744.744 0 0 0-.16 1.47l.983.216a.834.834 0 0 1-.178 1.648h-.556a.83.83 0 0 1-.786-.556M7 2.833V2m0 5v-.833"></path>
			<path d="M12.5.5h-11a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1"></path>
		</g>
	</svg>
);

export const ServerControlIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}>
			<path d="m10.852 14.772l-.383.923m2.679-.923a3 3 0 1 0-2.296-5.544l-.383-.923m2.679.923l.383-.923"></path>
			<path d="m13.53 15.696l-.382-.924a3 3 0 1 1-2.296-5.544m3.92 1.624l.923-.383m-.923 2.679l.923.383"></path>
			<path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5m-15 4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5M6 18h.01M6 6h.01m3.218 4.852l-.923-.383m.923 2.679l-.923.383"></path>
		</g>
	</svg>
);

export const SettingsIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
		<path
			fill="currentColor"
			d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357 357 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a352 352 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357 357 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088l-24.512 11.968a294 294 0 0 0-34.816 20.096l-22.656 15.36l-116.224-25.088l-65.28 113.152l79.68 88.192l-1.92 27.136a293 293 0 0 0 0 40.192l1.92 27.136l-79.808 88.192l65.344 113.152l116.224-25.024l22.656 15.296a294 294 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152l24.448-11.904a288 288 0 0 0 34.752-20.096l22.592-15.296l116.288 25.024l65.28-113.152l-79.744-88.192l1.92-27.136a293 293 0 0 0 0-40.256l-1.92-27.136l79.808-88.128l-65.344-113.152l-116.288 24.96l-22.592-15.232a288 288 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384a192 192 0 0 1 0-384m0 64a128 128 0 1 0 0 256a128 128 0 0 0 0-256"
			strokeWidth={15}
			stroke="currentColor"></path>
	</svg>
);

export const UserUploadIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
		<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5}>
			<path d="M22 8v12c0 2.21-4.03 4-9 4s-9-1.79-9-4V8"></path>
			<path d="M22 14c0 2.21-4.03 4-9 4s-9-1.79-9-4m18-6c0 2.21-4.03 4-9 4s-9-1.79-9-4s4.03-4 9-4s9 1.79 9 4m10-2h6a4 4 0 0 1 4 4v6M16 42h-6a4 4 0 0 1-4-4v-6"></path>
			<circle cx={35} cy={29} r={5}></circle>
			<path d="M44 44H26a9 9 0 1 1 18 0"></path>
		</g>
	</svg>
);

export const StaffsIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.1}>
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
			<circle cx={9} cy={7} r={4}></circle>
		</g>
	</svg>
);

export const ExchangeRateIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} color="currentColor">
			<path d="m19.333 14l.824.758c.179.176.268.264.237.339s-.159.075-.412.075h-3.104C15.288 15.172 14 16.438 14 18c0 .352.066.69.185 1m2.482 3l-.824-.758c-.179-.176-.268-.264-.237-.339s.159-.075.412-.075h3.104C20.712 20.828 22 19.562 22 18c0-.352-.066-.69-.185-1"></path>
			<path d="M21.991 11.5C22 10.9 22 10.736 22 10c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10s0 5.657 1.172 6.828S6.229 18 10 18h1m7.5-8h-.009M5.5 10h-.009"></path>
			<path d="M14.5 10a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></path>
		</g>
	</svg>
);

export const GaugeIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
		<path
			fill="currentColor"
			d="M207.06 72.67A111.24 111.24 0 0 0 128 40h-.4C66.07 40.21 16 91 16 153.13V176a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-24a111.25 111.25 0 0 0-32.94-79.33M224 176H119.71l54.76-75.3a8 8 0 0 0-12.94-9.42L99.92 176H32v-22.87c0-3.08.15-6.12.43-9.13H56a8 8 0 0 0 0-16H35.27c10.32-38.86 44-68.24 84.73-71.66V80a8 8 0 0 0 16 0V56.33A96.14 96.14 0 0 1 221 128h-21a8 8 0 0 0 0 16h23.67c.21 2.65.33 5.31.33 8Z"
			strokeWidth={3}
			stroke="currentColor"></path>
	</svg>
);

export const PayInIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} color="currentColor">
			<path d="M12.002 9.007c-1.105 0-2 .672-2 1.5c0 .829.895 1.5 2 1.5s2 .672 2 1.5c0 .829-.896 1.5-2 1.5m0-6c.87 0 1.612.417 1.886 1m-1.886-1v-1m0 7c-.87 0-1.612-.417-1.886-1m1.886 1v1"></path>
			<path d="M13 2.507h-1c-4.478 0-6.718 0-8.109 1.391S2.5 7.528 2.5 12.008c0 4.477 0 6.717 1.391 8.108s3.63 1.391 8.109 1.391c4.478 0 6.718 0 8.109-1.391s1.391-3.63 1.391-8.109v-1"></path>
			<path d="M21.488 2.493L17.313 6.67m-.825-3.656l.119 3.091c0 .729.435 1.183 1.227 1.24l3.124.147"></path>
		</g>
	</svg>
);

export const PayOutIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} color="currentColor">
			<path d="M12.002 9.001c-1.105 0-2 .672-2 1.5s.895 1.5 2 1.5s2 .672 2 1.5s-.896 1.5-2 1.5m0-6c.87 0 1.612.417 1.886 1m-1.886-1v-1m0 7c-.87 0-1.612-.417-1.886-1m1.886 1v1"></path>
			<path d="M13.5 2.501H12c-4.478 0-6.718 0-8.109 1.391S2.5 7.522 2.5 12.001c0 4.478 0 6.717 1.391 8.109C5.282 21.5 7.521 21.5 12 21.5c4.478 0 6.718 0 8.109-1.391S21.5 16.48 21.5 12v-1.5m-5-3.001l4.176-4.178m.824 3.656l-.118-3.091c0-.729-.435-1.183-1.228-1.24l-3.124-.147"></path>
		</g>
	</svg>
);

export const PartnerIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
		<path
			fill="currentColor"
			d="m254.3 107.91l-25.52-51.06a16 16 0 0 0-21.47-7.15l-24.87 12.43l-52.39-13.86a8.14 8.14 0 0 0-4.1 0L73.56 62.13L48.69 49.7a16 16 0 0 0-21.47 7.15L1.7 107.9a16 16 0 0 0 7.15 21.47l27 13.51l55.49 39.63a8.1 8.1 0 0 0 2.71 1.25l64 16a8 8 0 0 0 7.6-2.1l55.07-55.08l26.42-13.21a16 16 0 0 0 7.15-21.46Zm-54.89 33.37L165 113.72a8 8 0 0 0-10.68.61C136.51 132.27 116.66 130 104 122l43.24-42h31.81l27.21 54.41ZM41.53 64L62 74.22l-25.57 51.05L16 115.06Zm116 119.13l-58.11-14.52l-49.2-35.14l28-56L128 64.28l9.8 2.59l-45 43.68l-.08.09a16 16 0 0 0 2.72 24.81c20.56 13.13 45.37 11 64.91-5L188 152.66Zm62-57.87l-25.52-51L214.47 64L240 115.06Zm-87.75 92.67a8 8 0 0 1-7.75 6.06a8 8 0 0 1-1.95-.24l-41.67-10.42a7.9 7.9 0 0 1-2.71-1.25l-26.35-18.82a8 8 0 0 1 9.3-13l25.11 17.94L126 208.24a8 8 0 0 1 5.82 9.7Z"
			strokeWidth={3}
			stroke="currentColor"></path>
	</svg>
);

export const AdminTransferIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h3m3 7l5-5m0 4.5V17h-4.5"></path>
	</svg>
);

export const SMSMessageGateWayIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.8}
			d="M8 9h8m-8 4h6m4-9a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-5l-5 3v-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z"></path>
	</svg>
);

export const CurrenciesIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
		<path
			fill="currentColor"
			d="M9.73 16c-2.82 0-5.12-2.29-5.12-5.12a5.1 5.1 0 0 1 2.72-4.52c.24-.13.55-.04.68.21c.13.24.04.55-.21.68a4.12 4.12 0 0 0-2.19 3.64c0 2.27 1.85 4.12 4.12 4.12s4.12-1.85 4.12-4.12c0-.83-.25-1.63-.71-2.31c-.16-.23-.1-.54.13-.69c.23-.16.54-.1.69.13c.58.85.89 1.85.89 2.88c0 2.82-2.29 5.12-5.12 5.12Z"></path>
		<path
			fill="currentColor"
			d="M11.5 14H7.95c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3.55c.28 0 .5.22.5.5s-.22.5-.5.5m-1.41-2H7.96c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2.13c.28 0 .5.22.5.5s-.22.5-.5.5"></path>
		<path
			fill="currentColor"
			d="M8.67 13.87c-.28 0-.5-.22-.5-.5V9.91c0-.77.43-1.45 1.11-1.8c.25-.12.55-.02.67.22c.12.25.02.55-.22.67c-.34.17-.56.52-.56.9v3.46c0 .28-.22.5-.5.5Z"></path>
		<path
			fill="currentColor"
			d="M11.32 9.37c-2.58 0-4.68-2.1-4.68-4.68S8.74 0 11.32 0S16 2.1 16 4.68s-2.1 4.68-4.68 4.68Zm0-8.37C9.29 1 7.64 2.65 7.64 4.68s1.65 3.68 3.68 3.68S15 6.71 15 4.68S13.35 1 11.32 1"></path>
		<path
			fill="currentColor"
			d="M11.25 7.43c-.97 0-1.75-.79-1.75-1.75v-2c0-.97.79-1.75 1.75-1.75S13 2.72 13 3.68c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2c0 .41.34.75.75.75s.75-.34.75-.75c0-.28.22-.5.5-.5s.5.22.5.5c0 .97-.79 1.75-1.75 1.75"></path>
		<path
			fill="currentColor"
			d="M11 4.46H9.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H11c.28 0 .5.22.5.5s-.22.5-.5.5M11 6H9.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H11c.28 0 .5.22.5.5s-.22.5-.5.5m-5.6 7.4C2.42 13.4 0 10.98 0 8a5.403 5.403 0 0 1 7.47-4.99c.26.11.38.4.27.65c-.11.26-.4.38-.65.27A4.406 4.406 0 0 0 1.01 8c0 2.42 1.98 4.4 4.4 4.4c.28 0 .5.22.5.5s-.22.5-.5.5Z"></path>
		<path fill="currentColor" d="M5.47 9.5c-.28 0-.5-.22-.5-.5V4.85c0-.28.22-.5.5-.5s.5.22.5.5V9c0 .28-.22.5-.5.5"></path>
		<path
			fill="currentColor"
			d="M5.3 8.5a1.73 1.73 0 0 1 0-3.46h.35c.95 0 1.73.77 1.73 1.73v.18c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-.18c0-.4-.33-.73-.73-.73H5.3c-.4 0-.73.33-.73.73s.33.73.73.73c.28 0 .5.22.5.5s-.22.5-.5.5M5 10.92s-.08 0-.12-.02c-.77-.19-1.31-.88-1.31-1.67v-.18c0-.28.22-.5.5-.5s.5.22.5.5v.18c0 .33.23.62.55.7c.27.07.43.34.36.61c-.06.23-.26.38-.48.38"></path>
	</svg>
);

export const HomeIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M11.336 2.253a1 1 0 0 1 1.328 0l9 8a1 1 0 0 1-1.328 1.494L20 11.45V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.55l-.336.297a1 1 0 0 1-1.328-1.494zM6 9.67V19h3v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5h3V9.671l-6-5.333zM13 19v-4h-2v4z"></path>
	</svg>
);

export const CSVIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
		<path
			fill="currentColor"
			d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v144H176c-35.3 0-64 28.7-64 64v144H64c-35.3 0-64-28.7-64-64zm384 64H256V0zM200 352h16c22.1 0 40 17.9 40 40v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-8c0-8.8 7.2-16 16-16s16 7.2 16 16v8c0 22.1-17.9 40-40 40h-16c-22.1 0-40-17.9-40-40v-80c0-22.1 17.9-40 40-40m133.1 0H368c8.8 0 16 7.2 16 16s-7.2 16-16 16h-34.9c-7.2 0-13.1 5.9-13.1 13.1c0 5.2 3 9.9 7.8 12l37.4 16.6c16.3 7.2 26.8 23.4 26.8 41.2c0 24.9-20.2 45.1-45.1 45.1H304c-8.8 0-16-7.2-16-16s7.2-16 16-16h42.9c7.2 0 13.1-5.9 13.1-13.1c0-5.2-3-9.9-7.8-12l-37.4-16.6c-16.3-7.2-26.8-23.4-26.8-41.2c0-24.9 20.2-45.1 45.1-45.1m98.9 0c8.8 0 16 7.2 16 16v31.6c0 23 5.5 45.6 16 66c10.5-20.3 16-42.9 16-66V368c0-8.8 7.2-16 16-16s16 7.2 16 16v31.6c0 34.7-10.3 68.7-29.6 97.6l-5.1 7.7c-3 4.5-8 7.1-13.3 7.1s-10.3-2.7-13.3-7.1l-5.1-7.7c-19.3-28.9-29.6-62.9-29.6-97.6V368c0-8.8 7.2-16 16-16"
			strokeWidth={13}
			stroke="currentColor"></path>
	</svg>
);

export const PDFIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
		<path
			fill="currentColor"
			d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v144H176c-35.3 0-64 28.7-64 64v144H64c-35.3 0-64-28.7-64-64zm384 64H256V0zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56h-16v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-8.8 7.2-16 16-16m32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16v48zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-32c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16m32 128c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-16v96zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16z"
			strokeWidth={7}
			stroke="currentColor"></path>
	</svg>
);

export const JPGIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M17.5 6h3.9a.25.25 0 0 0 .17-.43L16.43.43A.25.25 0 0 0 16 .6v3.9A1.5 1.5 0 0 0 17.5 6M12 13.12h-.62a.26.26 0 0 0-.26.26v1.24a.26.26 0 0 0 .26.26H12a.88.88 0 0 0 0-1.76"></path>
		<path
			fill="currentColor"
			d="M21.75 7H17.5A2.5 2.5 0 0 1 15 4.5V.25a.25.25 0 0 0-.25-.25H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7.25a.25.25 0 0 0-.25-.25M9.12 17a2.12 2.12 0 1 1-4.24 0a.62.62 0 1 1 1.24 0a.88.88 0 1 0 1.76 0v-4.5a.62.62 0 0 1 1.24 0Zm2.75-.88h-.49a.26.26 0 0 0-.26.26v2.12a.62.62 0 1 1-1.24 0v-6a.61.61 0 0 1 .62-.62H12a2.12 2.12 0 0 1 2.11 2.34a2.2 2.2 0 0 1-2.24 1.9m7.25-1.62a.62.62 0 1 1-1.24 0V14a.88.88 0 0 0-1.76 0v3a.88.88 0 0 0 1.65.42c.05-.09.12-.3-.09-.3h-.18a.62.62 0 1 1 0-1.24h1a.62.62 0 0 1 .62.62v.5a2.12 2.12 0 0 1-4.24 0v-3a2.12 2.12 0 0 1 4.24 0Z"></path>
	</svg>
);

export const ExcelIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="m2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.494v20.848a.5.5 0 0 1-.57.494L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4zm-6.8 9L13 8h-2.4L9 10.286L7.4 8H5l2.8 4L5 16h2.4L9 13.714L10.6 16H13z"></path>
	</svg>
);

export const TransferIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M18 10a1 1 0 0 0-1-1H5.41l2.3-2.29a1 1 0 0 0-1.42-1.42l-4 4a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 11h14a1 1 0 0 0 1-1m3.92 3.62A1 1 0 0 0 21 13H7a1 1 0 0 0 0 2h11.59l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-1.09"></path>
	</svg>
);

export const RegisterInactiveIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36">
		<path
			fill="currentColor"
			d="M28 4H12a2 2 0 0 0-2 2h18v24H12v-9.8h-2V30a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
			className="clr-i-outline clr-i-outline-path-1"
			strokeWidth={1.1}
			stroke="currentColor"></path>
		<path
			fill="currentColor"
			d="M15.12 18.46a1 1 0 1 0 1.41 1.41l5.79-5.79l-5.78-5.79a1 1 0 0 0-1.41 1.41L18.5 13H4a1 1 0 0 0-1 1a1 1 0 0 0 1 1h14.5Z"
			className="clr-i-outline clr-i-outline-path-2"
			strokeWidth={1.1}
			stroke="currentColor"></path>
		<path fill="none" d="M0 0h36v36H0z"></path>
	</svg>
);

export const RegisterActiveIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36">
		<path
			fill="currentColor"
			d="M28 4H12a2 2 0 0 0-2 2v7h8.5l-3.38-3.29a1 1 0 0 1 1.41-1.41l5.79 5.79l-5.79 5.79a1 1 0 0 1-1.41-1.41L18.5 15H10v15a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
			className="clr-i-solid clr-i-solid-path-1"
			strokeWidth={0.4}
			stroke="currentColor"></path>
		<path
			fill="currentColor"
			d="M10 13H4a1 1 0 0 0-1 1a1 1 0 0 0 1 1h6Z"
			className="clr-i-solid clr-i-solid-path-2"
			strokeWidth={0.4}
			stroke="currentColor"></path>
		<path fill="none" d="M0 0h36v36H0z"></path>
	</svg>
);

export const VerifyEmailInactiveIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M13 19c0-.34.04-.67.09-1H4V8l8 5l8-5v5.09c.72.12 1.39.37 2 .72V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9.09c-.05-.33-.09-.66-.09-1m7-13l-8 5l-8-5zm-2.25 16.16l-2.75-3L16.16 18l1.59 1.59L21.34 16l1.16 1.41z"></path>
	</svg>
);

export const VerifyEmailActiveIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M13 19c0-3.31 2.69-6 6-6c1.1 0 2.12.3 3 .81V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h9.09c-.05-.33-.09-.66-.09-1M4 8V6l8 5l8-5v2l-8 5zm13.75 14.16l-2.75-3L16.16 18l1.59 1.59L21.34 16l1.16 1.41z"></path>
	</svg>
);

export const SMSInactiveIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="m6 18l-2.3 2.3q-.475.475-1.088.213T2 19.575V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-.85-2H20V4H4v13.125zM4 16V4zm4-5q.425 0 .713-.288T9 10t-.288-.712T8 9t-.712.288T7 10t.288.713T8 11m4 0q.425 0 .713-.288T13 10t-.288-.712T12 9t-.712.288T11 10t.288.713T12 11m4 0q.425 0 .713-.288T17 10t-.288-.712T16 9t-.712.288T15 10t.288.713T16 11"></path>
	</svg>
);

export const SMSActiveIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="m6 18l-2.3 2.3q-.475.475-1.088.213T2 19.575V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm2-7q.425 0 .713-.288T9 10t-.288-.712T8 9t-.712.288T7 10t.288.713T8 11m4 0q.425 0 .713-.288T13 10t-.288-.712T12 9t-.712.288T11 10t.288.713T12 11m4 0q.425 0 .713-.288T17 10t-.288-.712T16 9t-.712.288T15 10t.288.713T16 11"></path>
	</svg>
);

export const EmailAddInactiveIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M13 19c0-.34.04-.67.09-1H4V8l8 5l8-5v5.09c.72.12 1.39.37 2 .72V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9.09c-.05-.33-.09-.66-.09-1m7-13l-8 5l-8-5zm0 9v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"></path>
	</svg>
);

export const EmailAddActiveIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M13 19c0-3.31 2.69-6 6-6c1.1 0 2.12.3 3 .81V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h9.09c-.05-.33-.09-.66-.09-1M4 8V6l8 5l8-5v2l-8 5zm16 7v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"></path>
	</svg>
);

export const DigitCodeInctiveIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" strokeWidth={1.8}>
			<path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></path>
			<path
				strokeLinecap="round"
				d="M12 10v4m-1.732-3l3.464 2m0-2l-3.464 2m-3.535-3v4M5 11l3.464 2m0-2L5 13m12.268-3v4m-1.732-3L19 13m0-2l-3.465 2"></path>
		</g>
	</svg>
);

export const DigitCodeActiveIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172M12.75 10a.75.75 0 0 0-1.5 0v.701l-.607-.35a.75.75 0 0 0-.75 1.298l.607.35l-.607.351a.75.75 0 1 0 .75 1.3l.607-.351V14a.75.75 0 0 0 1.5 0v-.7l.607.35a.75.75 0 0 0 .75-1.3L13.5 12l.607-.35a.75.75 0 0 0-.75-1.3l-.607.35zm-6.017-.75a.75.75 0 0 1 .75.75v.7l.606-.35a.75.75 0 0 1 .75 1.3l-.607.35l.607.35a.75.75 0 1 1-.75 1.3l-.606-.35v.7a.75.75 0 0 1-1.5 0v-.701l-.608.35a.75.75 0 0 1-.75-1.298L5.232 12l-.607-.35a.75.75 0 1 1 .75-1.3l.608.351V10a.75.75 0 0 1 .75-.75m11.285.75a.75.75 0 0 0-1.5 0v.701l-.607-.35a.75.75 0 0 0-.75 1.298l.607.35l-.608.351a.75.75 0 0 0 .75 1.3l.608-.351V14a.75.75 0 0 0 1.5 0v-.7l.607.35a.75.75 0 0 0 .75-1.3l-.607-.35l.607-.35a.75.75 0 0 0-.75-1.3l-.607.35z"
			clipRule="evenodd"></path>
	</svg>
);

export const ChangePasswordInactiveIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.8}
			d="M8 10V8c0-2.761 1.239-5 4-5s4 2.239 4 5v2M3.5 17.8v-4.6c0-1.12 0-1.68.218-2.107a2 2 0 0 1 .874-.875c.428-.217.988-.217 2.108-.217h10.6c1.12 0 1.68 0 2.108.217a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v4.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C18.98 21 18.42 21 17.3 21H6.7c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3.5 19.481 3.5 18.921 3.5 17.8m8.5-2.05v-.5m4 .5v-.5m-8 .5v-.5"></path>
	</svg>
);

export const ChangePasswordActiveIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M16.75 8c0-1.478-.33-2.901-1.107-3.975c-.8-1.107-2.03-1.775-3.643-1.775s-2.842.668-3.643 1.775C7.58 5.099 7.25 6.522 7.25 8v1.25h-.58c-.535 0-.98 0-1.345.03c-.38.031-.736.098-1.073.27a2.75 2.75 0 0 0-1.202 1.202c-.172.337-.24.694-.27 1.074c-.03.364-.03.81-.03 1.344v4.66c0 .535 0 .98.03 1.345c.03.38.098.737.27 1.074a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.239 1.073.27c.365.03.81.03 1.345.03h10.66c.535 0 .98 0 1.345-.03c.38-.031.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.074c.03-.364.03-.81.03-1.344V13.17c0-.534 0-.98-.03-1.344c-.03-.38-.098-.737-.27-1.074a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.239-1.074-.27c-.365-.03-.81-.03-1.345-.03h-.58zm-8 0c0-1.283.29-2.36.822-3.096c.51-.703 1.28-1.154 2.428-1.154s1.919.45 2.428 1.154c.532.736.822 1.813.822 3.096v1.25h-6.5zm4 7.25v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0M16 14.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75m-7.25.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0"></path>
	</svg>
);

export const MoneyIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M22 17H2a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2m0 4H2a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2M6 7a1 1 0 1 0 1 1a1 1 0 0 0-1-1m14-6H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3m1 11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Zm-9-7a3 3 0 1 0 3 3a3 3 0 0 0-3-3m0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1m6-2a1 1 0 1 0 1 1a1 1 0 0 0-1-1"
			strokeWidth={0.2}
			stroke="currentColor"></path>
	</svg>
);

export const ReceiptIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M3 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v16a1 1 0 0 1-1.625.78l-1.929-1.542l-2.391 1.594a1 1 0 0 1-1.18-.051L12 20.28l-1.875 1.5a1 1 0 0 1-1.18.051l-2.391-1.594l-1.93 1.543A1 1 0 0 1 3 21zm5 1a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
			clipRule="evenodd"
			strokeWidth={0.2}
			stroke="currentColor"></path>
	</svg>
);
