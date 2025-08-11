import { FieldProps } from "@/utils/interfaces";

export const Field: React.FC<FieldProps> = ({
    label,
    required,
    placeholder,
    value,
    onChange,
    type = "text",
}) => {
    return (
        <label className="block mb-3">
            <span className="mb-1 block text-xs font-medium text-neutral-700">
                {label}
                {required && <span className="text-red-500 ml-0.5">*</span>}
            </span>
            <input
                type={type}
                required={required}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full h-[48px] rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm placeholder-neutral-400 outline-none focus:ring-2 focus:ring-neutral-900/10"
            />
        </label>
    );
}

