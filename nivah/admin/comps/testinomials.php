<?php
    $url = "http://localhost/nivah_api/testinomials/read.php";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/json"));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $res = json_decode(curl_exec($ch));
    curl_close($ch);
    if ($res->code != 0) {
        $records = $res->records;
        for ($i = 0; $i < count($records); $i++) {
            $records[$i]->description = substr($records[$i]->description, 0, 20) . "...";
        }
    }
 ?>


<div class="testinomial">
    <h2>Testinomials</h2>
    <p>(Max 5, for performance)</p>
    <div class="over-tool">
        <form id="upload-testinomial"  method="post" enctype="multipart/form-data">
            <div class="form-group">
                <label for="picture">Picture</label>
                <input type="file" name="picture" class="form-control-file" id="picture"/>
            </div>
            <div class="form-group">
                <label for="client-name">Client's Name</label>
                <input type="text" name="cli_name" class="form-control" id="client-name"/>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea class="form-control" name="description" id="description" rows="3"></textarea>
            </div>
             <button type="submit" name="submit_file" class="btn btn-primary mb-2">Add</button>
             <button id="close-diag" class="btn btn-secondary mb-2">Cancel</button>
        </form>

    </div>
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Picture</th>
                <th scope="col">Description</th>
                <th scope="col">Client name</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <?php
                if ($res->code != 0) {
                    for ($i = 0; $i < count($records); $i++) {
                        echo '<tr>
                                <th scope="row">'.$records[$i]->id.'</th>
                                <td><img src="http://localhost/nivah_api/uploads/testinomials/'.$records[$i]->img_name.'" width="48" height="48"/></td>
                                <td>'.$records[$i]->description.'</td>
                                <td>'.$records[$i]->client_name.'</td>
                                <td>
                                    <button id="edit-testinomial" value="'.$records[$i]->id.'" onclick="openTool(event)">Edit</button>
                                    <button id="del-testinomial" value="'.$records[$i]->id.'" onclick="openTool(event)">Delete</button>
                                </td>
                           </tr>';
                    }
                }
            ?>
        </tbody>
    </table>
    <button class="btn btn-primary" id="insert-testinomial" onclick="openTool(event)">Insert New</button>
</div>
