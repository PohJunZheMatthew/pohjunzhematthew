<html>
  <body>
    <?php
      $msg = test_input($_POST["Feedback"])
        echo"<h1>{$msg}</h1>"
      mail("poh_jun_zhe_matthew@s2025.ssts.edu.sg","Feedback",$msg)
      echo "<script>window.location='https://pohjunzhematthew.github.io/pohjunzhematthew/Contact.html'</script>"
    ?>
  </body>
</html>
