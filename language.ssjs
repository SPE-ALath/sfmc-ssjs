<script runat="server" language="javascript">
    Platform.Load("Core", "1.1.5");
    Platform.Function.ContentBlockByKey('email360-ssjs-lib');

    try{
        
        debugMode = ['html'];
        
        
        var obj = Platform.Function.LookupRows('ENT.CA-520000847-ISG-Language',['LU'],['1']);
        debug(obj);
        var parentFolderID = 0;
        var prox = new Script.Util.WSProxy();
        var cols = [ "Name","ContentType","ID","CustomerKey"];
        var filter = {
           LeftOperand: {
              Property: "ParentFolder.ID", 
              SimpleOperator: "equals", 
              Value: parentFolderID
           },
           LogicalOperator: "AND",
           RightOperand: {
              Property: "ContentType", 
              SimpleOperator: "equals", 
              Value: 'dataextension'
           }
        };
        var data = prox.retrieve("DataFolder", cols, filter);
        debug(data);
        
        var QueryFolder = Folder.Retrieve({Property:"ContentType",SimpleOperator:"equals",Value:"queryactivity"});
        debug(QueryFolder);
        
        
       
  
    } catch(e){
        // workaround for Thread Abort Exception from redirect
        var desc = e.description; //Pulls the description from error object
        if(desc.includes("ExactTarget.OMM.AMPScriptRedirectException: Error in the application. - from")) {
            Platform.Response.Write(desc); //This is arbitrary as will not be run
        } else {
            // redirect error page
            cp.redirectError({
                errorCode: 500,
                errorDebug: Platform.Function.Stringify(e)
            });
        }
    }
</script>
