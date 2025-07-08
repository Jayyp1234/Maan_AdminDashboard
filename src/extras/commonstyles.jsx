export const formStyles = "w-full h-13 p-3 border border-stone-200 rounded-md focus:border-(--primary-clr)";

export const checkboxStyles =
	"data-[state=checked]:bg-(--primary-clr) bg-stone-50 w-5 h-5 border-stone-300 shadow-none data-[state=checked]:border-(--primary-clr) transition duration-300 ease-in-out";

export const actionBtnStyle =
	"h-12 rounded-full w-full p-4 text-white disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 flex items-center justify-center text-[.925rem] bg-(--primary-clr)";

export const tableHeaderCellStyle = "font-semibold text-black min-w-[120px] md:min-w-[60px] text-nowrap flex-nowrap py-4 text-[.925rem]";

export const tabBtnsContainerStyle = "bg-transparent w-auto pb-3 h-auto pl-2 rounded-none  justify-start overflow-x-auto";

export const tabStyle =
	"relative px-2 py-1 text-sm font-medium text-muted-foreground shadow-none data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-b-emerald-500 rounded-none transition ease-in-out duration-300 flex-auto capitalize";

export const activeTabStyle =
	"absolute left-0 -bottom-0.5 h-0.5 w-full bg-emerald-500 scale-x-0 data-[state=active]:scale-x-100 transition-transform duration-300 origin-left";

export const preTableActionStyle =
	"lg:ml-auto active-scale text-sm bg-[var(--primary-clr)] gap-2.5 rounded-full flex items-center p-2.5 px-5 text-white";

export const labelStyle = "mb-1.5 font-semibold text-[.94rem] text-gray-900";

export const inputStyle =
	"border border-stone-400/50 rounded-md px-3 py-2 h-10 w-full focus:outline-none ring-1 ring-transparent ring-offset-1 placeholder:text-sm focus:border-stone-400/50 focus:ring-(--primary-clr)";
