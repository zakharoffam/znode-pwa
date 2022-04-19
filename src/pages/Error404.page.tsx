import { Box } from "@mui/material";

export default function Error404Page() {
  document.title = 'ZNode. - Страница не найдена';

  return (
    <Box>
      Такой страницы не существует. :(
    </Box>
  );
}
