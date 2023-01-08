import { Box, Link, Typography } from "@mui/material";

export default function MainPage() {

  return (
    <Box sx={{ paddingX: { xs: 2, md: 1 }}}>
      <Typography paragraph><Link href="https://t.me/znoderu" target="_blank">ZNode.TChannel</Link> - бот.</Typography>
      <Typography paragraph><Link href="https://t.me/ZNodeTBot" target="_blank">ZNode.TBot</Link> - бот.</Typography>
    </Box>
  );
}
