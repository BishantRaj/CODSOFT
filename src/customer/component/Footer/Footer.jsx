import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        classname="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography classname="pb-5" variant="h6">
            {" "}
            Company {" "}
          </Typography>
          <div>
            <Button classname="pb-5" variant="h6" gutterbutton>
              {" "}
              About{" "}
            </Button>
          </div>
          <div>
            <Button classname="pb-5" variant="h6" gutterbutton>
              {" "}
              Blog{" "}
            </Button>
          </div>
          <div>
            <Button classname="pb-5" variant="h6" gutterbutton>
              {" "}
              press{" "}
            </Button>
          </div>
          <div>
            {" "}
            <Button classname="pb-5" variant="h6" gutterbutton>
              {" "}
              Jobs{" "}
            </Button>
          </div>
          <div>
            <Button classname="pb-5" variant="h6" gutterbutton>
              {" "}
              Partners{" "}
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography classname="pb-5" variant="h6">
            {""}
            Solutions {" "}
          </Typography>
          <div>
            <Button classname="pb-5" variant="h6" gutterbutton>
              {" "}
              Marketing
            </Button>
          </div>
          <div>
            <Button classname="pb-5" variant="h6" gutterbutton>
              {" "}
              Analytics
            </Button>
          </div>
          <div>
            <Button classname="pb-5" variant="h6" gutterbutton>
             Eommerce
            </Button>
          </div>
          <div>
            {" "}
            <Button classname="pb-5" variant="h6" gutterbutton>
              {" "}
              Insights
            </Button>
          </div>
          <div>
            <Button classname="pb-5" variant="h6" gutterbutton>
              {" "}
             Supports
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography classname="pb-5" variant="h6">
            {""}
            Docunentation
          </Typography>
          <div>
            <Button classname="pb-5" variant="h6" gutterbutton>
              {" "}
              Guides
            </Button>
          </div>
          <div>
            <Button classname="pb-5" variant="h6" gutterbutton>
              {" "}
              API Status
            </Button>
          </div>
          
        <Grid item xs={12} sm={6} md={3}>
          <Typography classname="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button classname="pb-5" variant="h6" gutterbutton>
              {" "}
              About{" "}
            </Button>
          </div>
          <div>
            <Button classname="pb-5" variant="h6" gutterbutton>
              {" "}
              Blog{" "}
            </Button>
          </div>
          <div>
            <Button classname="pb-5" variant="h6" gutterbutton>
              {" "}
              press{" "}
            </Button>
          </div>
          <div>
            {" "}
            <Button classname="pb-5" variant="h6" gutterbutton>
              {" "}
              Jobs{" "}
            </Button>
          </div>
          <div>
            <Button classname="pb-5" variant="h6" gutterbutton>
              {" "}
              Partners{" "}
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid classname='pt-20' item xs={12} >
        <Typography variant="body2" component="p" align="center">
            &copy; 2023 My Company.All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
            Made with so much efforts by us.
        </Typography>
        <Typography variant="body2" component="p" align="center">
           Icons made by{' '}
           <Link href="https://www.freepik.com" color="inherit" underline="always">
                 Freepik 
           </Link>{' '}
           from{' '}
           <Link href="https://www.flaticon.com" color="inherit" underline="always">
            www.flaticon.com
           </Link>
        </Typography>

      </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
 