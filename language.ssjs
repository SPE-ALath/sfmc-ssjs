<script runat="server" language="javascript">
	Platform.Load("Core", "1.1.1");
	
	// Load SSJS Library
	Platform.function.ContentBlockByKey("email360-ssjs-lib");
	
	
		var obj = Platform.Function.LookupRows('D27BC4D6-6EE0-4C96-8898-95355D6C61A6');
		Write(Stringify(obj));
	
</script>
