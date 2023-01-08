import { Box } from "@mui/material";

export default function Error404Page() {
  document.title = 'ZNode. - Страница не найдена';

  return (
    <Box sx={{ paddingX: { xs: 2, md: 1 }}}>
      404! - Такой страницы не существует. :(
    </Box>
  );
}
