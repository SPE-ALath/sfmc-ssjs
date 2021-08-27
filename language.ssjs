<script runat="server" language="javascript">
	Platform.Load("Core", "1.1.1");
	
	// Load SSJS Library
	Platform.function.ContentBlockByKey("email360-ssjs-lib");
	
	try {
		var obj = Platform.function.LookupRows('ENT.CA-520000847-ISG-Language',['LanguageKey']);
		Write(stringify(obj));
	}
	catch(e) {
	}
</script>
