export const Exercise05 = () => {
	return (
		<div className="w-[400px] h-[300px] bg-[#B7E8FD] border-[#D7F2FE] border-[20px] rounded-md relative">
			Relative parent
			<div className="p-3 bg-[#0EA5E9] rounded-lg w-fit text-white absolute bottom-0 left-0">
				Absolute child
			</div>
		</div>
	);
};
