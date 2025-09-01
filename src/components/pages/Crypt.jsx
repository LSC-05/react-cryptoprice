import { Box, Stack, Paper, Button, List, ListItem} from '@mui/material';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const MainPaper = styled(Paper)(({ theme }) => ({
  borderRadius: 5,
  padding: theme.spacing(3),
  textAlign: 'justify',
}));

const AboutList = styled(List)(({theme}) => ({
    listStyleType:"disc",
    marginLeft: theme.spacing(2),
    padding: 0,
}))

const AboutListItem = styled(ListItem)(()=> ({
    display: "list-item",
    padding: 0,
    margin: 0,
}));

export const Crypt = () => (
  <Container maxWidth="md" sx={{ my: 5 }}>
    <Stack direction="column" alignItems="center" p={2} gap={3} my={10}>
      <Typography variant="h4" component="h2">
        暗号通貨について
      </Typography>
      <MainPaper>
        <Typography>
            暗号通貨とは、インターネット上でやり取りできる財産的価値であり、「資金決済に関する法律」において、次の性質をもつものと定義されています。
        </Typography>
      </MainPaper>
      <MainPaper>
        <AboutList>
            <AboutListItem>
                不特定の者に対して、代金の支払い等に使用でき、かつ、法定通貨（日本円や米国ドル等）と相互に交換できる
            </AboutListItem>
            <AboutListItem>
                電子的に記録され、転移できる
            </AboutListItem>
            <AboutListItem>
                法定通貨または法定通貨建ての資金（プリペイドカード等）ではない
            </AboutListItem>
            <AboutListItem>
                代表的な暗号通貨には、ビットコインやイーサリアム等があります。暗号通貨は、銀行等の第三者を介することなく、財産的価値をやり取りすることが可能な仕組みとして、高い注目を集めました
            </AboutListItem>
        </AboutList>
      </MainPaper>
      <MainPaper>
        <Typography>
            一般に、暗号通貨は、「交換所」や「取引所」と呼ばれる事業者（暗号資産交換業者）から入手・換金することができます。暗号資産交換業は、金融庁・財務局の登録を受けた事業者のみが行うことができます。
        </Typography>
      </MainPaper>
      <MainPaper>
        <Typography>
            暗号通貨は、国家やその中央銀行によって発行された、法定通貨ではありません。また、裏付け資産を持ってないことなどから、利用者の需給関係などさまざまな要因によって、暗号通貨の価値が大きく変動する傾向にある点には注意が必要です。また、暗号通貨に関する詐欺などの事例も数多く報告されていますので、注意が必要です。
        </Typography>
      </MainPaper>
    </Stack>
  </Container>
);
