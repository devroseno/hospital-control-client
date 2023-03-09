import classNames from "clsx";
import { FC } from "react";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { HeaderUserMenu } from "../../../partials";
import { useLayout } from "../../core";

const toolbarButtonMarginClass = "ms-1 ms-lg-3",
	toolbarButtonHeightClass = "w-30px h-30px w-md-40px h-md-40px",
	toolbarUserAvatarHeightClass = "symbol-30px symbol-md-40px",
	toolbarButtonIconSizeClass = "svg-icon-1";

const Topbar: FC = () => {
	const { config } = useLayout();

	return (
		<div className="d-flex align-items-stretch flex-shrink-0">
			{/* CHAT */}
			<div className={classNames("d-flex align-items-center", toolbarButtonMarginClass)}>
				{/* begin::Menu wrapper */}
				<div
					className={classNames(
						"btn btn-icon btn-active-light-primary position-relative",
						toolbarButtonHeightClass
					)}
					id="kt_drawer_chat_toggle"
				>
					<KTSVG
						path="/media/icons/duotune/communication/com012.svg"
						className={toolbarButtonIconSizeClass}
					/>

					<span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
				</div>
				{/* end::Menu wrapper */}
			</div>

			{/* begin::User */}
			<div
				className={classNames("d-flex align-items-center", toolbarButtonMarginClass)}
				id="kt_header_user_menu_toggle"
			>
				{/* begin::Toggle */}
				<div
					className={classNames("cursor-pointer symbol", toolbarUserAvatarHeightClass)}
					data-kt-menu-trigger="click"
					data-kt-menu-attach="parent"
					data-kt-menu-placement="bottom-end"
					data-kt-menu-flip="bottom"
				>
					<img src={toAbsoluteUrl("/media/avatars/150-2.jpg")} alt="metronic" />
				</div>
				<HeaderUserMenu />
				{/* end::Toggle */}
			</div>
			{/* end::User */}

			{/* begin::Aside Toggler */}
			{config.header.left === "menu" && (
				<div
					className="d-flex align-items-center d-lg-none ms-2 me-n3"
					title="Show header menu"
				>
					<div
						className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
						id="kt_header_menu_mobile_toggle"
					>
						<KTSVG path="/media/icons/duotune/text/txt001.svg" className="svg-icon-1" />
					</div>
				</div>
			)}
		</div>
	);
};

export { Topbar };
