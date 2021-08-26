export default (link, development) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title>Apelsina.com Confirmation Mail</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	</head>
	<body style="margin: 0; padding: 0;">
		<table cellpadding="0" cellspacing="0" width="100%">
			<tr>
				<td>
					<table
						align="center"
						cellpadding="0"
						cellspacing="0"
						width="600"
					>
						<tr>
							<td
								bgcolor=" #FF8C00"
								align="center"
								style="padding: 40px 0 30px 0; color:#fff: font-size:20px; font-weight:bold;"
							>
								Apelsina.com
							</td>
						</tr>
						<tr>
							<td bgcolor=" #fff" align="center"  style="padding: 40px 0 30px 0;">
								please click the link bellow to confirm your
								Email:
							</td>
						</tr>
						<tr>
							<td bgcolor=" #fff" align="center">
								<a
									href="http://${
                    development ? "localhost:3000" : "bythealphabet.com"
                  }/confirmation/${link}"
									>http://${
                    development ? "localhost:3000" : "bythealphabet.com"
                  }/confirmation/${link}
								</a>
							</td>
						</tr>
						<tr >
							<td bgcolor=" #fff" align="center" style="padding: 40px 0 30px 0;" >
								if you didnt Sign up at apelsina.com please ignore this email.
							</td>
						</tr>
						<tr>
							<td bgcolor=" #20232a" style="color: #fff" align="center">
								
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</body>
</html>`;
};
