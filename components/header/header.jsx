import Image from "next/image";

const Header = ({title, logo, alt = '', width = 100, height = 100}) => {
	return (
		<section className="w-full flex flex-row items-center mt-5">
			<div className="self-start">
				<Image
					src={logo}
					alt={alt}
					width={width}
					height={height}
				/>
			</div>
			<div className="mx-auto">
				<h1 className="text-4xl font-bold">{title}</h1>
			</div>
		</section>
	)
};

export default Header;
