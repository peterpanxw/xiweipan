(function() {
  'use strict';

  if(!document.queryCommandSupported('copy')) {
    return;
  }

  function flashCopyMessage(el, msg) {
    el.textContent = msg;
    SetTimeout (function () {
      El. TextContent = "Copy";
    }, 1000);
  }

  Function selectText (node) {
    Var selection = window.GetSelection ();
    Var range = document.CreateRange ();
    Range.SelectNodeContents (node);
    Selection.RemoveAllRanges ();
    Selection.AddRange (range);
    Return selection;
  }

  Function addCopyButton (containerEl) {
    Var copyBtn = document.CreateElement ("button");
    CopyBtn. ClassName = "highlight-copy-btn";
    CopyBtn. TextContent = "Copy";

    Var codeEl = containerEl. FirstElementChild;
    CopyBtn.AddEventListener ('click', function () {
      Try {
        Var selection = selectText (codeEl);
        Document.ExecCommand ('copy');
        Selection.RemoveAllRanges ();

        FlashCopyMessage (copyBtn, 'Copied!')
      } catch (e) {
        Console && console.Log (e);
        FlashCopyMessage (copyBtn, 'Failed :\' (')
      }
    });

    ContainerEl.AppendChild (copyBtn);
  }

  // Add copy button to code blocks
  Var highlightBlocks = document.GetElementsByClassName ('highlight');
  Array.Prototype.ForEach.Call (highlightBlocks, addCopyButton);
})();
