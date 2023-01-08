import { Box } from "@mui/material";

export default function ErrorAppPage() {
  document.title = 'ZNode. - Критическая ошибка'

  return (
    <Box sx={{ paddingX: { xs: 2, md: 1 }}}>
      500! На странице возникла критическая ошибка. :(
    </Box>
  );
}
