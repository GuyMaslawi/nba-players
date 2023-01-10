import TextField from "@mui/material/TextField";

interface TextFieldProps {
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({
  type = "text",
  value,
  onChange,
}: TextFieldProps) => {
  return (
    <TextField type={type} value={value} onChange={onChange} sx={{ mb: 2 }} />
  );
};

export default SearchBar;
