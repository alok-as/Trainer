import React from "react";
import Webcam from "react-webcam";
import classes from "./index.module.scss";
import { Heading } from "../index";
import placeholderImage from "../../../assets/images/Auth/selfie-placeholder.png";
import { Icon } from "../../../components/UI";
import sprites from "../../../assets/icons/sprites.svg";

const videoConstraints = {
	width: 400,
	height: 400,
	facingMode: "user",
};

const Selfie = ({ isSelfieTaking, setIsSelfieTaking, selfie, setSelfie }) => {
	const webcamRef = React.useRef(null);

	const capture = React.useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot();
		console.log(imageSrc);
		setSelfie(imageSrc);
	}, [webcamRef, setSelfie]);

	return (
		<div className={classes.selfie}>
			<Heading>
				Take a Selfie, <br />
				And add a face to your details
			</Heading>
			<div className={classes.selfie__wrapper}>
				{isSelfieTaking ? (
					selfie ? (
						<img src={selfie} alt="User" />
					) : (
						<div className={classes.selfie__container}>
							<Webcam
								audio={false}
								height={"100%"}
								width={"100%"}
								ref={webcamRef}
								mirrored={true}
								screenshotFormat="image/jpeg"
								videoConstraints={videoConstraints}
							/>
						</div>
					)
				) : (
					<div className={classes.selfie__placeholder}>
						<img src={placeholderImage} alt="User Placeholder" />
					</div>
				)}
			</div>
			<div className={classes.selfie__buttons}>
				{isSelfieTaking ? (
					selfie ? (
						<div
							className={classes.selfie__icons}
							onClick={() => setSelfie(null)}
						>
							<Icon
								icon={`${sprites}#icon-replay`}
								iconStyle={classes.selfie__icon}
							/>
						</div>
					) : (
						<div className={classes.selfie__icons} onClick={capture}>
							<Icon
								icon={`${sprites}#icon-camera`}
								iconStyle={classes.selfie__icon}
							/>
						</div>
					)
				) : (
					<div
						className={classes.selfie__icons}
						onClick={() => setIsSelfieTaking(true)}
					>
						<Icon
							icon={`${sprites}#icon-camera_alt`}
							iconStyle={classes.selfie__icon}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Selfie;
