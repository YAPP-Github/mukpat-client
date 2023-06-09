interface Props {
	size?: number;
}

const CheckedIcon = ({ size = 10 }: Props) => {
	return (
		<svg width={size} height={size} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9.70704 3.07019L4.43164 8.34518C4.041 8.73588 3.40729 8.73588 3.0163 8.34518L0.293112 5.62182C-0.097704 5.23112 -0.097704 4.59736 0.293112 4.20654C0.683987 3.81567 1.31763 3.81567 1.70833 4.20637L3.7242 6.22224L8.29164 1.6548C8.68252 1.26393 9.31622 1.26422 9.70692 1.6548C10.0976 2.04562 10.0976 2.67914 9.70704 3.07019Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default CheckedIcon;
