import { Avatar, Card, CardContent, Typography } from "@mui/material"
import { cardContent } from "../utils/constans"

const About = () => {
   return (
      <section id="about" className="flex flex-col sm:flex-row justify-center items-center w-full p-5 h-[380px] gap-5 z-50">
         {
            cardContent.map(content => (
               <Card key={content.sub} outlined="true" 
               sx={{
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  paddingY: '10px',
                  maxWidth: '380px', 
                  minHeight: { xs:'160px', md:'200px' },
                  borderBottom: 5,
                  borderRadius: 2,
                  borderBottomColor: '#40F8FF'
                  }}>
                     <Avatar sx={{ bgcolor: '#FF2E63' }}>
                        {content.icon}
                     </Avatar>
                     <CardContent>
                        <Typography>
                           {content.description}
                        </Typography>
                     </CardContent>
               </Card>
            ))
         }
      </section>
   )
}

export default About